import { Card, Text, Col } from "@nextui-org/react";

type PortfolioProps = {
    title: string;
    subtitle: string;
    img: string;
}

const PortfolioCard = ({ title, subtitle, img }: PortfolioProps) => {
    return (
        <Card css={{ w: "100%" }}>
            <Card.Image
                src={img}
                width="100%"
                height={340}
                objectFit="cover"
                alt={title}
                css={{
                    objectPosition: "top",
                    backgroundColor: '#fff',
                }}
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
                    <Text h4 color="#1d1d1d">
                        {title}
                    </Text>
                    <Text size={12} weight="bold" transform="uppercase" color="#2f2f2faa">
                        {subtitle}
                    </Text>
                </Col>
            </Card.Footer>
        </Card>
    )
}

export default PortfolioCard