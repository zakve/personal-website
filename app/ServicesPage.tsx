'use client'

import type { NextPage } from 'next'

import React from '@/public/icons/react.png';
import { services } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';

const ServicesPage: NextPage = () => {
  return (
    <div className='grid sm:grid-flow-col gap-6 sm:grid-cols-3'>
      {
        services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            img={service.img}
            description={service.description}
            badges={service.badges}
          />
        ))
      }
    </div>
  )
}

export default ServicesPage
