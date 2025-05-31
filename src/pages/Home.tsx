import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      const ctx = gsap.context(() => {
        gsap.from(".fade-in", {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.3,  // Elemanlar arasında 0.3 saniye gecikme
        })
      }, containerRef)

      return () => ctx.revert() // Cleanup animasyonlar
    }
  }, [])

return (
  <div
    ref={containerRef}
    className="min-h-screen flex flex-col items-center justify-center text-white relative homePage font-sans"
    id="home"
  >
    {/* Saydam arka plan */}
    <div
      className="absolute inset-0 -z-10"
      style={{
        background: 'linear-gradient(to bottom, rgba(55, 65, 81, 0.3), rgba(10, 10, 10, 0.3))',
      }}
    />

    <h1 className="fade-in text-4xl sm:text-8xl mb-4 text-center font-extrabold tracking-tight">
      TALHA CELIKTAS
    </h1>
    <p className="fade-in text-lg p-4 mb-6 max-w-xl text-center font-light leading-relaxed text-gray-300">
      I am a software developer, design enthusiast and technology enthusiast.
    </p>
    <div className="absolute bottom-10 animate-bounce">
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
)

}
