'use client'

import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { Destinations } from '@/components/Destinations'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Destinations />
      </main>
      <Contact />
    </div>
  )
}
