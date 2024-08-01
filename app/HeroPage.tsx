'use client'

import type { NextPage } from 'next'
import Image from 'next/image'

import { scrollToContact } from "@/lib/utils";
import React from '@/public/icons/react.png';
import Typescript from '@/public/icons/typescript.jpg'
import Figma from '@/public/icons/figma.png'
import Photoshop from '@/public/icons/ps.png'
import { Button } from '@/components/ui/button';

const HeroPage: NextPage = () => {
  return (
    <div className='pt-20 pb-24 max-w-[600px]'>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl bg-gradient-to-r from-blue-600 to-fuchsia-500 bg-clip-text text-transparent">
        Hi, I&apos;m Martin
      </h1>
      <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors leading-10">
        I am a creative person with over 10 years of design and programming experience who enjoys discovering and learning new things.
      </h2>
      <div className='flex flex-row pt-6 gap-6'>
        <div className='w-14 h-14 relative'>
          <Image
            src={React.src}
            alt='React'
            sizes="100vw"
            fill
            className='object-contain'
          />
        </div>
        <div className='w-14 h-14 relative'>
          <Image
            src={Typescript.src}
            alt='Typescript'
            sizes="100vw"
            fill
            className='object-contain'
          />
        </div>
        <div className='w-14 h-14 relative'>
          <Image
            src={Figma.src}
            alt='Figma'
            sizes="100vw"
            fill
            className='object-contain'
          />
        </div>
        <div className='w-14 h-14 relative'>
          <Image
            src={Photoshop.src}
            alt='Photoshop'
            sizes="100vw"
            fill
            className='object-contain'
          />
        </div>
      </div>
      <Button onClick={scrollToContact} variant='secondary' className='mt-12' size='xl'>
        CONTACT ME
      </Button>
    </div>
  )
}

export default HeroPage
