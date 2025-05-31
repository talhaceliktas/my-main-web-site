import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Mail, Instagram, Github, Briefcase, Linkedin } from "lucide-react";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;

          gsap.fromTo(
            ".contact-talha-link",
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.2,
            }
          );

          observer.unobserve(container);
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  const links = [
    { href: "mailto:celiktas.talha@icloud.com", Icon: Mail, label: "Email" },
    { href: "https://github.com/talhaceliktas", Icon: Github, label: "GitHub" },
    { href: "https://www.instagram.com/sl3epwy/", Icon: Instagram, label: "Instagram" },
    { href: "https://www.upwork.com/freelancers/~015b596fc5d6c9a1ff", Icon: Briefcase, label: "Upwork" },
    { href: "https://www.linkedin.com/in/talhaceliktas/", Icon: Linkedin, label: "Linkedin" },
  ];

  return (
    <section className=" text-white py-20 px-8 relative" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12 text-white relative z-10">Contact Me</h2>

        <p className="text-lg text-gray-300 mb-10">
          Let's build something together. Feel free to reach out on any platform!
        </p>

        <div className="flex flex-wrap justify-center gap-6" ref={containerRef}>
          {links.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="contact-talha-link flex items-center gap-2 text-white opacity-0 translate-y-[30px] hover:text-cyan-400 transition"
            >
              <Icon size={20} />
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Sol alt köşe notu */}
      <div className="absolute bottom-4 left-4 text-xs text-gray-500 select-none max-w-xs">
        © 2025 Talha Celiktas. All rights reserved. <br />
        Built with React, TypeScript & GSAP.
      </div>
    </section>
  );
}
