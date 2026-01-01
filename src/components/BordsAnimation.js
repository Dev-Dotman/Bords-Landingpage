'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function BordsAnimation() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lLeft = document.querySelector("#laptopLeft");
    const lRight = document.querySelector("#laptopRight");
    const lCenter = document.querySelector("#laptopCenter");
    const rTextL = document.querySelector("#revealTextLeft");
    const rTextR = document.querySelector("#revealTextRight");

    if (!lLeft || !lRight || !lCenter || !rTextL || !rTextR) return;

    // --- INITIAL STATE ---
    gsap.set(lCenter, { rotationY: 0, scale: 1, y: 0, z: 0 });
    gsap.set(lLeft, { rotationY: 30, rotationX: 15, scale: 0.8, x: 0, y: 50, z: -150, opacity: 0.7 });
    gsap.set(lRight, { rotationY: -30, rotationX: 15, scale: 0.8, x: 0, y: 50, z: -150, opacity: 0.7 });
    gsap.set([rTextL, rTextR], { opacity: 0, scale: 0.5, filter: "blur(20px)" });

    // --- PINNED TIMELINE ---
    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#pinContainer",
        start: "top top",
        end: "+=250%",
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
      }
    });

    mainTimeline
      // Phase 1: Fade out Hero Text
      .to(".hero-text", { 
        opacity: 0, 
        y: -100, 
        filter: "blur(15px)", 
        ease: "power2.inOut" 
      }, 0)
      
      // Phase 2: Scale and animate out ALL laptops
      .to(lCenter, { 
        y: -200, 
        scale: 0.4, 
        rotationY: 25, 
        rotationX: -15,
        opacity: 0,
        ease: "power2.inOut" 
      }, 0.2)

      // Phase 3: Side Laptops Fly Out and Fade
      .to(lLeft, { 
        x: -600, 
        y: -50, 
        scale: 0.3, 
        rotationY: 70, 
        opacity: 0, 
        ease: "power1.in" 
      }, 0) 
      .to(lRight, { 
        x: 600, 
        y: -50, 
        scale: 0.3, 
        rotationY: -70, 
        opacity: 0, 
        ease: "power1.in" 
      }, 0)

      // Phase 4: Reveal White Text Behind
      .to([rTextL, rTextR], {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        ease: "back.out(1.7)"
      }, 0.6)
      .to(rTextL, { x: -30 }, 0.6)
      .to(rTextR, { x: 30 }, 0.6);

    // --- MOUSE LERP ---
    let mouseX = 0, mouseY = 0, curX = 0, curY = 0;
    
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 15;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 15;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId;
    function animate() {
      curX += (mouseX - curX) * 0.08;
      curY += (mouseY - curY) * 0.08;
      
      const laptopGroup = document.querySelector(".laptop-group");
      if (laptopGroup) {
        gsap.set(laptopGroup, { 
          rotationY: curX * 0.2, 
          rotationX: -curY * 0.2 
        });
      }
      
      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Additional scroll animations for new sections
  useEffect(() => {
    // Extra polish: Section entry animations for stat cards
    gsap.from(".stat-card", {
      scrollTrigger: {
        trigger: "#logic",
        start: "top center",
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out"
    });

    // Subtle animation for stationary mockups
    gsap.from(".stationary-laptop", {
      scrollTrigger: {
        trigger: "#product-depth",
        start: "top center+=200",
      },
      x: 200,
      opacity: 0,
      stagger: 0.15,
      duration: 1.5,
      ease: "power4.out"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null;
}
