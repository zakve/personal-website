'use client'

import { scrollToContact } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import Image, { StaticImageData } from 'next/image'
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

type ServiceProps = {
    title: string;
    img: string | StaticImageData;
    description: string[];
    badges: string[];
}

const ServiceCard = ({ title, img, description, badges }: ServiceProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className='px-0'>
                <div className='relative min-h-40'>
                    <Image src={img}
                        objectFit="cover"
                        alt="Service image background"
                        className='h-full w-full'
                        fill
                    />
                </div>
                <div className='px-8 pt-7 pb-3 text-left'>
                    <div className='pb-3'>
                        <ul className="list-disc">
                            {
                                description?.map((point, i) => <li key={i}>{point}</li>)
                            }
                        </ul>
                    </div>
                    <div className="">
                        {
                            badges?.map((badge, i) => <Badge className="mr-2 mb-2" key={i} color="primary" variant='secondary'>{badge}</Badge>)
                        }
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button
                    variant='outline'
                    size="lg"
                    onClick={scrollToContact}
                >
                    Contact me
                </Button>
            </CardFooter>
        </Card>
    )
}

export default ServiceCard