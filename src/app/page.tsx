'use client'

import { useEffect, useRef } from 'react'
import { gsap } from "gsap"
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import PortfolioSection from '@/components/PortfolioSection'
import TeamSection from '@/components/TeamSection'
import Footer from '@/components/Footer'


gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log('useEffect fired');
  
    const main = mainRef.current
    const sections = sectionsRef.current
  
    if (main && sections) {
      const sectionsCount = sections.children.length
      const sectionWidth = window.innerWidth
  
      const t1 = gsap.to(sections, {
        x: () => -(sectionWidth * (sectionsCount - 1)),
        ease: "none",
        scrollTrigger: {
          trigger: main,
          start: "top top",
          end: () => `+=${sectionWidth * sectionsCount}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          snap: {
            snapTo: 1 / (sectionsCount - 1),
            duration: { min: 0.2, max: 0.6 },
            ease: "power1.inOut",
          },
          invalidateOnRefresh: true,
        },
      })
  
      return () => {
        t1.kill()
      }
    }
  
    console.log('titleRef:', titleRef.current);
    console.log('subtitleRef:', subtitleRef.current);
    console.log('buttonsRef:', buttonsRef.current);
  
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    })
  
    gsap.from(subtitleRef.current, {
      opacity: 0,
      y: 20,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.8,
    })

    gsap.from(buttonsRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      ease: "power4.out",
      delay: 1.2,
      stagger: 0.2,
    })
  
  }, [])
  

  return (
    <main ref={mainRef} className="bg-gray-900 text-white h-screen overflow-hidden">
      <div ref={sectionsRef} className="flex w-[500vw]">
        
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <TeamSection />
        <Footer />       
        
      </div>
    </main>
  )
}
