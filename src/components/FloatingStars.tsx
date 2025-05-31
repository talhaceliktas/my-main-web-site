import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FloatingStars({ children }: { children: React.ReactNode }) {
  const starsRef = useRef<HTMLDivElement>(null);
  const shootingStarsRef = useRef<HTMLDivElement>(null);
  const starCount = 50;
  const shootingStarCount = 3;

  useEffect(() => {
    if (!starsRef.current || !shootingStarsRef.current) return;

    const stars = starsRef.current.querySelectorAll(".star");
    stars.forEach((star) => {
      const duration = 10 + Math.random() * 15; // 10-25 saniye arası süzülme
      const delay = Math.random() * -duration;
      gsap.to(star, {
        y: "-120vh",
        ease: "linear",
        duration,
        repeat: -1,
        delay,
      });
    });

    const shootingStars = shootingStarsRef.current.querySelectorAll(".shooting-star");
    shootingStars.forEach((star) => {
      const startAnimation = () => {
        const leftStart = Math.random() * 100;
        const topStart = Math.random() * 30 + 10; // üstten biraz aşağıda başlasın
        const length = 150 + Math.random() * 100; // kayan yıldız uzunluğu
        const duration = 1 + Math.random() * 1; // 1-2 saniye sürsün

        gsap.set(star, {
          x: 0,
          y: 0,
          opacity: 1,
          left: `${leftStart}%`,
          top: `${topStart}vh`,
          width: `${length}px`,
          height: '2px',
          rotate: -45,
          backgroundColor: "white",
          filter: "drop-shadow(0 0 6px white)",
          position: 'absolute',
          borderRadius: '9999px',
        });

        gsap.to(star, {
          x: length,
          y: -length,
          opacity: 0,
          ease: "power1.out",
          duration,
          onComplete: () => {
            // biraz bekleyip tekrar başlat
            gsap.delayedCall(3 + Math.random() * 5, startAnimation);
          }
        });
      };

      // Animasyonu başlat
      startAnimation();
    });
  }, []);

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div
        ref={starsRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          overflow: "hidden",
          zIndex: 0,
          backgroundColor: "#000",
        }}
      >
        {[...Array(starCount)].map((_, i) => {
          const size = 1 + Math.random() * 2.5;
          const left = Math.random() * 100;
          const opacity = 0.5 + Math.random() * 0.5;
          const bottom = -10 - Math.random() * 100;

          return (
            <div
              key={i}
              className="star"
              style={{
                position: "absolute",
                bottom: `${bottom}px`,
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: "50%",
                backgroundColor: "white",
                opacity,
                filter: "drop-shadow(0 0 6px white)",
              }}
            />
          );
        })}
      </div>

      {/* Kayan yıldızlar (shooting stars) */}
      <div
        ref={shootingStarsRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          overflow: "visible",
          zIndex: -5,
        }}
      >
        {[...Array(shootingStarCount)].map((_, i) => (
          <div key={i} className="shooting-star" />
        ))}
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}
