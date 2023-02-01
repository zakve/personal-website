import { Card, Text, Col, Badge, Button, Spacer } from "@nextui-org/react";
import ListItem from '../components/ListItem';
import { scrollToContact } from "../utils/utils";

type ServiceProps = {
    title: string;
    img: string;
    description: string[];
    badges: string[];
}

const ServiceCard = ({ title, img, description, badges }: ServiceProps) => {

    return (
        <Card>
            <Card.Header>
                <Col>
                    <Text h4>
                        {title}
                    </Text>
                </Col>
            </Card.Header>
            <Card.Image
                src={img}
                objectFit="cover"
                width="100%"
                height={240}
                alt="Service image background"
            />
            <Card.Footer
                css={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
            >
                <ul>
                    {
                        description?.map((point, i) => <ListItem key={i} text={point} />)
                    }
                </ul>
                <Spacer y={1} />
                <div>
                    {
                        badges?.map((badge, i) => <Badge key={i} color="primary" variant="flat">{badge}</Badge>)
                    }
                </div>
                <Spacer y={1} />
                <Button
                    auto
                    ghost
                    color="gradient"
                    size="lg"
                    css={{ margin: 'auto' }}
                    onPress={scrollToContact}
                >
                    <Text
                        transform="uppercase"
                    >
                        Contact me
                    </Text>
                </Button>
            </Card.Footer>
        </Card>
    )
}

export default ServiceCard