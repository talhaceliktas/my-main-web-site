import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const isTouchDevice =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0)

    setIsMobile(isTouchDevice)

    if (isTouchDevice) return

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button')) setHovered(true)
    }

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button')) setHovered(false)
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', onMouseOver)
    window.addEventListener('mouseout', onMouseOut)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', onMouseOver)
      window.removeEventListener('mouseout', onMouseOut)
    }
  }, [])

  if (isMobile) return null // Mobilde hiç render etme

  const size = hovered ? 40 : 20
  const bgColor = hovered ? 'rgba(255, 255, 255, 0.9)' : 'transparent'
  const border = hovered ? 'none' : '2px solid rgba(255, 255, 255, 0.7)'

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: bgColor,
        border: border,
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        transition:
          'width 0.1s ease, height 0.1s ease, background-color 0.1s ease, border 0.1s ease',
        zIndex: 9999,
        mixBlendMode: 'difference',
        backdropFilter: hovered ? 'blur(4px)' : 'none',
      }}
    />
  )
}
