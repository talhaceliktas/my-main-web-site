import { useState, useEffect } from 'react'
import { Menu, X, Github } from 'lucide-react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollTo = (id: string) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${id}`, offsetY: 70 },
      ease: "power2.out"
    })
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300
        ${scrolled ? 'bg-black/80 shadow-md backdrop-blur-md' : 'bg-transparent'}`}
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-10 text-white">
        {/* Logo sola yapışık */}
        <a href="#" className="text-2xl font-bold text-cyan-400 flex-shrink-0">
          celiktas
        </a>

        {/* Menü linkleri */}
        <div className="hidden md:flex flex-grow justify-center gap-12 text-lg font-medium">
          <ScrollLink href="#home" label="Home" onClick={() => handleScrollTo("home")} />
          <ScrollLink href="#about" label="About" onClick={() => handleScrollTo("about")} />
          <ScrollLink href="#projects" label="Projects" onClick={() => handleScrollTo("projects")} />
          <ScrollLink href="#contact" label="Contact" onClick={() => handleScrollTo("contact")} />
        </div>

        {/* Sağdaki butonlar */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          {/* CV indirme butonu */}
          <a
            href="/TalhaCeliktasCV.pdf"  // CV dosyan burada olmalı, public klasöründe ya da uygun path'te
            download
            className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 px-4 rounded transition"
          >
            Download CV
          </a>

          {/* GitHub butonu */}
          <a
            href="https://github.com/talhaceliktas" // GitHub linkini kendi kullanıcı adınla değiştir
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-600 transition"
            aria-label="GitHub"
          >
            <Github size={24} />
            GitHub
          </a>
        </div>

        {/* Hamburger menü butonu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden ml-auto z-50 text-cyan-400"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobil Menü */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center gap-10 text-2xl transform transition-transform duration-300
        ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        <ScrollLink href="#home" label="Home" onClick={() => { handleScrollTo("home"); setMenuOpen(false) }} />
        <ScrollLink href="#about" label="About" onClick={() => { handleScrollTo("about"); setMenuOpen(false) }} />
        <ScrollLink href="#projects" label="Projects" onClick={() => { handleScrollTo("projects"); setMenuOpen(false) }} />
        <ScrollLink href="#contact" label="Contact" onClick={() => { handleScrollTo("contact"); setMenuOpen(false) }} />
        {/* Mobilde istersen CV ve GitHub linklerini de ekleyebilirsin */}
        <a
          href="/TalhaCeliktasCV.pdf"
          download
          className="text-cyan-400 hover:text-cyan-600"
          onClick={() => setMenuOpen(false)}
        >
          Download CV
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-600"
          onClick={() => setMenuOpen(false)}
        >
          GitHub
        </a>
      </div>
    </nav>
  )
}

function ScrollLink({
  href,
  label,
  onClick,
}: {
  href: string
  label: string
  onClick?: () => void
}) {
  return (
    <a
      href={href}
      onClick={e => {
        e.preventDefault()
        if(onClick) onClick()
      }}
      className="hover:text-cyan-400 transition-colors duration-200 font-mono"
    >
      {label}
    </a>
  )
}
