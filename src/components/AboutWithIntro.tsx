import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutWithIntro() {
  const introRef = useRef<HTMLDivElement>(null)

  const introText = `Hi, I'm Talha Celiktas — a software developer blending code and creativity. 
  I love turning complex problems into elegant, efficient, and maintainable solutions. 
  From backend logic to beautiful frontends, I craft seamless digital experiences.
  Driven by curiosity, guided by design, and built with code.`

  useEffect(() => {
    if (!introRef.current) return
    const spans = introRef.current.querySelectorAll('span')

    gsap.set(spans, {
      opacity: 0.3,
      scale: 0.95,
      y: 20,
    })

    gsap.to(spans, {
      scrollTrigger: {
        trigger: introRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
      },
      opacity: 1,
      scale: 1,
      y: 0,
      textShadow: '0 0 6px rgba(236, 72, 153, 0.4), 0 0 12px rgba(236, 72, 153, 0.3)',
      stagger: {
        each: 0.01,
        from: 'start',
      },
      ease: 'power3.out',
      duration: 0.3,
    })
  }, [])

  return (
    <section className="bg-gradient-to-br from-gray-900 to-black text-white py-24 px-6 max-w-4xl mx-auto min-h-[150vh]">
      <h2 className="text-5xl font-extrabold mb-16 text-center tracking-wide text-pink-400 drop-shadow-lg">
        About Me
      </h2>

      <p
        ref={introRef}
        className="text-xl leading-relaxed text-gray-200 font-sans tracking-wide max-w-3xl mx-auto text-center"
        style={{ fontFeatureSettings: "'liga' off" }}
      >
        {introText.split('').map((char, i) => (
          <span
            key={i}
            className="inline-block select-none transition duration-300"
            style={{ willChange: 'opacity, transform, textShadow' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </p>
    </section>
  )
}