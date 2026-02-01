import Image from 'next/image'
import React from 'react'
import me from "../public/me.webp"
import { TerminalTypewriter } from './ui/terminal-typewriter'

const Hero = () => {
  return (
    <section  id="hero" className="relative flex min-h-screen w-full flex-col items-center pt-35 z-0">
        <div className="flex flex-col items-center justify-between">
            <div className='relative'>
                <Image src={me} alt='vikas-bhat-d' height={800} width={800} className='w-[350px] lg:w-[500px] '/>
                <div className='bg-linear-to-t from-black to-transparent h-[30%] w-full absolute rounded-2xl bottom-0  '>
                  <TerminalTypewriter
                        lines={[
                          "$ [OK] Startup sequence complete",
                          "$ [INFO] Loading modules",
                          "$ [DONE] System ready",
                        ]}
                        className="text-primary absolute bottom-4 mx-4"
                        typingSpeed={100}
                        deletingSpeed={50}
                        pauseDelay={600}
                      />
                </div>
            </div>
            <h1 className="font-outfit shadow-2xl text-secondary font-bold md:text-6xl text-4xl my-4">VIKAS BHAT D</h1>
        </div>
    </section>
  )
}

export default Hero