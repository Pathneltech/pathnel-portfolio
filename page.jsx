'use client'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.8}}
        className="text-5xl md:text-7xl font-bold">
          Michael Chukwuamaka UTI
        </motion.h1>
        <p className="mt-6 text-xl text-gray-400 max-w-2xl">
          Founder & Lead Engineer — PATHNEL TECH
        </p>
      </section>
    </main>
  )
}
