import { useEffect, useRef, cloneElement } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Monitor, Atom, PenTool } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const expertiseData = [
  {
    icon: <Monitor size={40} className="text-cyan-400" />, // ikon biraz büyüdü
    title: (
      <>
        <span className="text-cyan-400 font-semibold">Software</span> Development
      </>
    ),
    description: (
      <>
        Experienced in{' '}
        <span className="text-blue-400 cursor-pointer relative group font-semibold">
          C++
          <div className="absolute left-0 top-full mt-2 w-44 bg-gray-800 text-sm rounded-md p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg">
            Vector, OOP, Map, Queue, Linked List, STL, Boost, Qt
          </div>
        </span>
        ,{' '}
        <span className="text-yellow-400 cursor-pointer relative group font-semibold">
          Python
          <div className="absolute left-0 top-full mt-2 w-44 bg-gray-800 text-sm rounded-md p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg">
            sklearn, OpenCV, Pandas, NumPy, Seaborn
          </div>
        </span>
        ,{' '}
        <span className="text-purple-400 cursor-pointer relative group font-semibold">
          C#
          <div className="absolute left-0 top-full mt-2 w-40 bg-gray-800 text-sm rounded-md p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg">
            .NET, Entity Framework, LINQ, Async/Await
          </div>
        </span>
        ,{' '}
        <span className="text-green-400 cursor-pointer relative group font-semibold">
          Node.js
          <div className="absolute left-0 top-full mt-2 w-40 bg-gray-800 text-sm rounded-md p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg">
            Express, REST APIs, JWT, MongoDB, WebSockets
          </div>
        </span>
        , and{' '}
        <span className="text-red-400 cursor-pointer relative group font-semibold">
          Databases
          <div className="absolute left-0 top-full mt-2 w-44 bg-gray-800 text-sm rounded-md p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg">
            MSSQL, MySQL, MongoDB
          </div>
        </span>
        . Creating maintainable, scalable, and secure systems.
      </>
    ),
  },
  {
    icon: <Atom size={40} className="text-indigo-400" />,
    title: (
      <>
        <span className="text-indigo-400 font-semibold">Frontend</span> Development
      </>
    ),
    description: (
      <>
        Experienced in{' '}
        <span className="text-cyan-300 cursor-pointer relative group font-semibold">
          React
          <div className="absolute left-0 top-full mt-2 w-36 bg-gray-800 text-sm rounded-md p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg">
            Hooks, Context API, React Router, Redux
          </div>
        </span>
        ,{' '}
        <span className="text-orange-400 cursor-pointer relative group font-semibold">
          HTML
          <div className="absolute left-0 top-full mt-2 w-24 bg-gray-800 text-sm rounded-md p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg">
            Semantic Tags, Accessibility
          </div>
        </span>
        ,{' '}
        <span className="text-purple-300 cursor-pointer relative group font-semibold">
          CSS
          <div className="absolute left-0 top-full mt-2 w-28 bg-gray-800 text-sm rounded-md p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg">
            Flexbox, Grid, Animations
          </div>
        </span>
        , and{' '}
        <span className="text-teal-400 cursor-pointer relative group font-semibold">
          TailwindCSS
          <div className="absolute left-0 top-full mt-2 w-36 bg-gray-800 text-sm rounded-md p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg">
            Utility-first, Responsive Design, Custom Plugins
          </div>
        </span>
        . Clean code & UX-driven design focus.
      </>
    ),
  },
  {
    icon: <PenTool size={40} className="text-emerald-400" />,
    title: (
      <>
        <span className="text-emerald-400 font-semibold">UI Design</span> & Prototyping
      </>
    ),
    description:
      'Proficient in Figma, focused on minimalist, user-first interfaces for web and mobile.',
  },
]

export default function About() {
  const cardsRef = useRef<HTMLDivElement[]>([])
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const introRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  const introText = `Hi, I'm Talha Celiktas — a software developer focused on building efficient, scalable, and elegant solutions. From backend systems to intuitive frontends, I strive to create seamless digital experiences with a balance of functionality and design.`

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: -40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 90%',
            end: 'top 60%',
            scrub: true,
          },
        }
      )
    }

    if (introRef.current) {
      const spans = introRef.current.querySelectorAll('span')
      gsap.set(spans, { opacity: 0.3, y: 15 })

      gsap.to(spans, {
        scrollTrigger: {
          trigger: introRef.current,
          start: 'top 85%',
          end: 'bottom 20%',
          scrub: true,
        },
        opacity: 1,
        y: 0,
        ease: 'power2.out',
        stagger: { each: 0.005, from: 'start' },
      })
    }

    if (cardsContainerRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      cardsRef.current.forEach((el, i) => {
        if (el) {
          tl.fromTo(
            el,
            { opacity: 0, y: 40, rotationX: 10 },
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              duration: 1,
              ease: 'power3.out',
              delay: i * 0.1,
            },
            i * 0.3
          )
        }
      })
    }
  }, [])

    return (
  <section className="bg-neutral-950 text-white min-h-screen py-28 px-8" id="about">
    <div className="max-w-7xl mx-auto">
      <h2
        ref={headingRef}
        className="text-5xl md:text-6xl font-bold text-center mb-24 tracking-tight text-gray-100"
      >
        About Me
      </h2>

      <div
        ref={introRef}
        className="text-2xl md:text-3xl leading-relaxed text-gray-300 font-light tracking-wide max-w-4xl mx-auto text-center mb-28"
        style={{ fontFeatureSettings: "'liga' off" }}
      >
        {introText.split(' ').map((word, i) => (
          <span
            key={i}
            className="inline-block whitespace-nowrap mr-2" // Kelimelerin ayrı düşmesini engellemek için
          >
            {word.split('').map((char, j) => (
              <span
                key={j}
                className="inline-block select-none"
                style={{ willChange: 'opacity, transform' }}
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </div>

      <div ref={cardsContainerRef} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {expertiseData.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el
            }}
            className="bg-neutral-900 border border-neutral-700 p-10 rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.05] hover:shadow-cyan-500/30 opacity-0 min-w-0"
          >
            <div className="flex flex-wrap items-center gap-5 mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 text-current">
                {cloneElement(item.icon, { className: 'w-full h-full' })}
              </div>
              <h3 className="text-2xl md:text-4xl font-semibold text-gray-100">{item.title}</h3>
            </div>
            <div className="text-gray-300 text-lg leading-relaxed">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)


}
