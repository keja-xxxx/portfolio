'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerTrigger, DrawerClose } from "@/components/ui/drawer"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="w-screen h-screen flex items-center bg-black justify-center text-left pl-30">
      <div className="pl-20">
        <h1 
          className={`text-9xl font-light font-sans transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Hi, I am &lt;KƎJɅ&gt;
        </h1>
        <p 
          className={`text-4xl font-extralight mt-4 font-mono transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Your cutie in the house.
        </p>
        <div 
          className={`mt-8 space-x-4 transition-all duration-1000 ease-out delay-600 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
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
          width={500}
          height={500}
          priority
        />
      </div>
    </section>
  )
}