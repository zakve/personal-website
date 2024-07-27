import type { NextPage } from 'next'
import Image from 'next/image'

import martin from '@/public/images/martinzaklasnik.png'
import GithubLogo from '@/public/icons/github.png'
import LinkedInLogo from '@/public/icons/linkedin.png'
import Link from 'next/link'

const ContactPage: NextPage = () => {
  return (
    <div className='flex flex-col justify-center text-center'>
      <div className='flex justify-center'>
        <Image
          width={100}
          height={100}
          src={martin.src}
          alt="profile picture"
          className='object-cover'
        />
      </div>
      <p className='pt-2'>
        Martin Zaklasnik
      </p>
      <div className='flex flex-row justify-center gap-5 py-9'>
        <Link
          href="https://www.linkedin.com/in/zaklasnikm/"
          target='_blank'
          rel="noopener noreferrer"
        >
          <Image
            src={LinkedInLogo.src}
            width={24}
            height={24}
            alt="LinkednIn"
          />
        </Link>
        <Link
          href="https://github.com/zakve"
          target='_blank'
          rel="noopener noreferrer"
        >
          <Image
            src={GithubLogo.src}
            width={24}
            height={24}
            alt="GitHub"
          />
        </Link>
      </div>
    </div>
  )
}

export default ContactPage
