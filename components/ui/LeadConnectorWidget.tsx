"use client"

import { useEffect, useRef } from "react"

export default function LeadConnectorWidget() {
  const injectedRef = useRef(false)

  useEffect(() => {
    if (injectedRef.current || typeof window === "undefined") {
      return
    }

    injectedRef.current = true

    const target = document.body
    if (!target) {
      return
    }

    const existingWidget = document.querySelector('[data-chat-widget]')
    if (!existingWidget) {
      const container = document.createElement("div")
      container.setAttribute("data-chat-widget", "")
      container.setAttribute("data-widget-id", "6a695a0a89b8c5f4e83f7322")
      container.setAttribute("data-location-id", "4iidLWaLVERRIPyoOqev")
      target.appendChild(container)
    }

    const scriptId = "leadconnector-loader-script"
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script")
      script.id = scriptId
      script.src = "https://widgets.leadconnectorhq.com/loader.js"
      script.setAttribute("data-resources-url", "https://widgets.leadconnectorhq.com/chat-widget/loader.js")
      script.setAttribute("data-widget-id", "6a695a0a89b8c5f4e83f7322")
      script.setAttribute("data-source", "WEB_USER")
      target.appendChild(script)
    }
  }, [])

  return null
}
