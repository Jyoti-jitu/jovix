"use client"

import { useEffect, useRef } from "react"

export interface LiquidEffectAnimationProps {
  className?: string
  canvasClassName?: string
  id?: string
  imageUrl?: string
  mobileImageUrl?: string
  metalness?: number
  roughness?: number
  displacementScale?: number
  setRain?: boolean
}

export function LiquidEffectAnimation({
  className = "fixed inset-0 m-0 w-full h-full touch-pan-y overflow-hidden",
  canvasClassName = "fixed inset-0 w-full h-full block",
  id = "liquid-canvas",
  imageUrl = "/jovix-liquid.png",
  mobileImageUrl = "/jovix-liquid-mobile.png",
  metalness = 0.75,
  roughness = 0.25,
  displacementScale = 5,
  setRain = false,
}: LiquidEffectAnimationProps = {}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const appRef = useRef<any>(null)
  const currentUrlRef = useRef<string>("")

  useEffect(() => {
    if (!canvasRef.current) return

    let isCancelled = false
    let scriptEl: HTMLScriptElement | null = null

    // Determine appropriate image based on initial viewport
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768
    const selectedUrl = isMobile && mobileImageUrl ? mobileImageUrl : imageUrl

    const resolveUrl = (url: string) => {
      if (typeof window !== "undefined" && url.startsWith("/")) {
        return `${window.location.origin}${url}`
      }
      return url
    }

    const initialResolvedUrl = resolveUrl(selectedUrl)
    currentUrlRef.current = initialResolvedUrl

    const initLiquid = async () => {
      const cdnUrl =
        "https://cdn.jsdelivr.net/npm/threejs-components@0.0.22/build/backgrounds/liquid1.min.js"

      try {
        // Method 1: Browser native dynamic module import
        const importModule = new Function("url", "return import(url)")
        const module = await importModule(cdnUrl)
        if (isCancelled || !canvasRef.current) return

        const LiquidBackground = module.default || module
        const app = LiquidBackground(canvasRef.current)
        await app.loadImage(initialResolvedUrl)

        if (app.liquidPlane?.material) {
          app.liquidPlane.material.metalness = metalness
          app.liquidPlane.material.roughness = roughness
        }
        if (app.liquidPlane?.uniforms?.displacementScale) {
          app.liquidPlane.uniforms.displacementScale.value = displacementScale
        }
        if (typeof app.setRain === "function") {
          app.setRain(setRain)
        }

        appRef.current = app
        window.__liquidApp = app
      } catch (directErr) {
        if (isCancelled) return
        console.warn("Native ESM dynamic import fallback to script tag:", directErr)

        // Method 2: Script element insertion fallback
        scriptEl = document.createElement("script")
        scriptEl.type = "module"
        scriptEl.textContent = `
          import LiquidBackground from '${cdnUrl}';
          const canvas = document.getElementById('${id}');
          if (canvas) {
            const app = LiquidBackground(canvas);
            app.loadImage('${initialResolvedUrl}');
            if (app.liquidPlane?.material) {
              app.liquidPlane.material.metalness = ${metalness};
              app.liquidPlane.material.roughness = ${roughness};
            }
            if (app.liquidPlane?.uniforms?.displacementScale) {
              app.liquidPlane.uniforms.displacementScale.value = ${displacementScale};
            }
            app.setRain(${setRain});
            window.__liquidApp = app;
          }
        `
        document.body.appendChild(scriptEl)
      }
    }

    initLiquid()

    // Responsive texture switcher on window resize (e.g. device rotation / viewport resize)
    const handleResize = () => {
      if (!appRef.current || !mobileImageUrl) return
      const nowMobile = window.innerWidth < 768
      const target = resolveUrl(nowMobile ? mobileImageUrl : imageUrl)
      if (currentUrlRef.current !== target) {
        currentUrlRef.current = target
        appRef.current.loadImage(target).catch?.(() => {})
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      isCancelled = true
      window.removeEventListener("resize", handleResize)

      if (appRef.current && typeof appRef.current.dispose === "function") {
        try {
          appRef.current.dispose()
        } catch (e) {
          console.warn("Dispose error:", e)
        }
        appRef.current = null
      }
      if (window.__liquidApp && typeof window.__liquidApp.dispose === "function") {
        try {
          window.__liquidApp.dispose()
        } catch (e) {
          console.warn("Window liquidApp dispose error:", e)
        }
        window.__liquidApp = undefined
      }
      if (scriptEl && document.body.contains(scriptEl)) {
        document.body.removeChild(scriptEl)
      }
    }
  }, [id, imageUrl, mobileImageUrl, metalness, roughness, displacementScale, setRain])

  return (
    <div
      className={className}
      style={{ fontFamily: '"Montserrat", serif' }}
    >
      <canvas ref={canvasRef} id={id} className={canvasClassName} />
    </div>
  )
}

declare global {
  interface Window {
    __liquidApp?: any
  }
}
