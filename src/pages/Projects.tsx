import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FileText, BookOpen, CreditCard, User, Github } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    icon: <FileText size={32} className="text-cyan-400" />,
    title: 'MyNotepad',
    description:
      'MyNotePad is a simple, fast note-taking app built with C# and Windows Forms. It saves your notes locally, so you can use it offline. With a clean design, it makes managing daily notes easy and efficient.',
    githubUrl: 'https://github.com/yourusername/mynotepad',
  },
  {
    icon: <BookOpen size={32} className="text-indigo-400" />,
    title: 'Library Project',
    description:
      'Library Project is a C# application for managing books and lending them to students. It provides essential features like adding, editing, deleting books, and lending them using student IDs in a simple digital system.',
    githubUrl: 'https://github.com/yourusername/library-project',
  },
  {
    icon: <CreditCard size={32} className="text-green-400" />,
    title: 'Bank System',
    description:
      'Basic Bank Management System is a C++ program for managing customer accounts with full CRUD operations. It offers a straightforward interface to handle banking tasks efficiently and reliably.',
    githubUrl: 'https://github.com/yourusername/bank-system',
  },
  {
    icon: <User size={32} className="text-yellow-400" />,
    title: 'My Portfolio',
    description:
      'My portfolio is a modern React application that showcases my projects and skills with a clean, responsive design. It leverages GSAP for smooth, engaging animations and uses React hooks and context for efficient state management.',
    githubUrl: 'https://github.com/yourusername/my-portfolio',
  },
]

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    projectsRef.current.forEach((el) => {
      if (!el) return
      gsap.fromTo(
        el,
        { opacity: 0, y: 20, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, [])

  return (
    <section className="bg-neutral-950 text-white min-h-screen py-24 px-6" id='projects'>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 tracking-tight text-gray-100">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              ref={(el) => {
                if (el) projectsRef.current[idx] = el
              }}
              className="relative bg-neutral-900 border border-neutral-700 p-6 rounded-xl shadow-md transition-transform hover:-translate-y-1 hover:scale-105 hover:shadow-cyan-500/40 cursor-pointer group"
              onClick={() => window.open(proj.githubUrl, '_blank')}
              title="View on GitHub"
            >
              <div className="flex items-center gap-3 mb-4">
                {proj.icon}
                <h4 className="text-xl font-semibold text-gray-100">{proj.title}</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{proj.description}</p>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <Github size={24} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
