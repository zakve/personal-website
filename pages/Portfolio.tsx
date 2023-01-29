import { Text, Grid, Card, Col } from "@nextui-org/react";
import { portfolioData } from '../data/portfolio'

type Props = {
}

const Portfolio = ({ }: Props) => {
  return (
    <Grid.Container gap={2} justify="center">
      {
        portfolioData?.map((project, i) => {
          return (
            <Grid sm={4} xs={12} key={i}>
              <Card css={{ w: "100%" }}>
                <Card.Image
                  src={project.img}
                  width="100%"
                  height={340}
                  objectFit="contain"
                  alt={project.title}
                  css={{ objectPosition: "top", backgroundColor: '#fff' }}
                />
                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.6)",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Col>
                    <Text h4 color="#000">
                      {project.title}
                    </Text>
                    <Text size={12} weight="bold" transform="uppercase" color="#151515aa">
                      {project.subtitle}
                    </Text>
                  </Col>
                </Card.Footer>
              </Card>
            </Grid>
          )
        })
      }
    </Grid.Container>
  )
}

export default Portfolio
