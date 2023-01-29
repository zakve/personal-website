import { Grid } from "@nextui-org/react";
import PortfolioCard from "../components/PortfolioCard";
import { portfolioData } from '../data/portfolio'

type Props = {
}

const Portfolio = ({ }: Props) => {
  return (
    <Grid.Container gap={2} justify="center">
      {
        portfolioData?.map((project, i) => {
          return (
            <Grid xs={12} sm={4} lg={3} key={i}>
              <PortfolioCard title={project.title} subtitle={project.subtitle} img={project.img} />
            </Grid>
          )
        })
      }
    </Grid.Container>
  )
}

export default Portfolio
