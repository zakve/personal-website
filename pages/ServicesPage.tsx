import type { NextPage } from 'next'
import { Grid } from '@nextui-org/react'

import { services } from '../data/services'
import ServiceCard from '../components/ServiceCard'

const ServicesPage: NextPage = () => {
  return (
    <Grid.Container gap={2} justify="center">
      {
        services?.map((service, i) =>
          <Grid xs={12} sm={4} key={i}>
            <ServiceCard
              title={service.title}
              img={service.img}
              description={service.description}
              badges={service.badges}
            />
          </Grid>)
      }
    </Grid.Container>
  )
}

export default ServicesPage
