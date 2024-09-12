'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerTrigger, DrawerClose } from "@/components/ui/drawer"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const main = mainRef.current
    const sections = sectionsRef.current

    if (main && sections) {
      const sectionsCount = sections.children.length // Number of sections (500vw)
      const sectionWidth = window.innerWidth // Each section takes 100vw

      // Horizontal scrolling and snapping setup
      const t1 = gsap.to(sections, {
        x: () => -(sectionWidth * (sectionsCount - 1)), // Move sections horizontally
        ease: "none",
        scrollTrigger: {
          trigger: main,
          start: "top top",
          end: () => `+=${sectionWidth * sectionsCount}`, // Total width of all sections
          scrub: 1, // Smooth scrolling
          pin: true,
          anticipatePin: 1,
          snap: {
            snapTo: 1 / (sectionsCount - 1), // Snap to each section (100vw)
            duration: { min: 0.2, max: 0.6 }, // Smooth snap animation
            ease: "power1.inOut",
          },
          invalidateOnRefresh: true, // Refresh on window resize
        },
      })

      return () => {
        t1.kill()
      }
    }

    // Animate Hero Section texts
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
        {/* Hero Section */}
        <section className="w-screen h-screen flex items-center bg-black justify-center text-left pl-30">
          <div className="pl-20">
            <h1 ref={titleRef} className="text-9xl font-light font-sans">Hi, I am &lt;KƎJɅ&gt;</h1>
            <p ref={subtitleRef} className="text-4xl font-extralight mt-4 font-mono">Your cutie in the house.</p>
            <div ref={buttonsRef} className="mt-8 space-x-4">
              <Button className="bg-primary px-4 py-2 rounded-md font-sans">Show Profile</Button>
              <Button className="bg-primary px-4 py-2 rounded-md font-sans">Know More</Button>
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline">Open Drawer</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
          <div className="w-fit h-fit overflow-hidden">
            <Image
              src="/logo.jpg"
              alt="Profile Picture"
              width= {500}
              height= {500}
              priority
            />
          </div>
        </section>

        {/* Services Section */}
        <section className="w-screen h-screen flex flex-col items-center bg-black justify-center text-left">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="text-gray-400 mb-8">Subheading goes here</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-700 rounded-lg">
              <div className="text-green-500 mb-4">💎</div>
              <h3 className="text-xl font-bold">Development</h3>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg">
              <div className="text-green-500 mb-4">💻</div>
              <h3 className="text-xl font-bold">Design</h3>
              <p className="text-gray-400">Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg">
              <div className="text-green-500 mb-4">🌐</div>
              <h3 className="text-xl font-bold">SEO</h3>
              <p className="text-gray-400">Vestibulum ac diam sit amet quam vehicula elementum sed sit.</p>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="w-screen h-screen flex flex-col items-center bg-black justify-center text-left">
          <h2 className="text-4xl font-bold">My Portfolio</h2>
          <p className="text-gray-400 mb-8">Subheading goes here</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=300&width=500&text=Project+${i}`}
                  alt={`Project ${i}`}
                  width={500}
                  height={300}
                  className="transform transition hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="w-screen h-screen flex flex-col items-center bg-black justify-center text-left">
          <h2 className="text-4xl font-bold">Our Team</h2>
          <p className="text-gray-400 mb-8">Subheading goes here</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Mark Twain', 'Jane Doe', 'John Smith'].map((name, i) => (
              <div key={name} className="p-6 bg-gray-700 rounded-lg">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=128&width=128&text=${name}`}
                    alt={name}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-gray-400">{['CEO', 'COO', 'CTO'][i]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="w-screen h-screen flex items-center justify-center bg-gray-700 text-center text-gray-400">
          <p>© 2024 WP Dev. All rights reserved.</p>
        </footer>
      </div>
    </main>
  )
}
