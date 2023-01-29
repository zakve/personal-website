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
            <Grid sm={3} xs={12} key={i}>
              <PortfolioCard title={project.title} subtitle={project.subtitle} img={project.img} />
            </Grid>
          )
        })
      }
    </Grid.Container>
  )
}

export default Portfolio
