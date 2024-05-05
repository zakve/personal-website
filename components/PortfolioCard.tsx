import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

type PortfolioProps = {
    title: string;
    subtitle: string;
    img: string;
}

const PortfolioCard = ({ title, subtitle, img }: PortfolioProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className="cursor-pointer hover:scale-105 object-cover transition-all">
                    <CardContent className='px-0'>
                        <div className='relative min-h-40'>
                            <Image src={img}
                                objectFit="cover"
                                alt="Service image background"
                                className='h-full w-full'
                                fill
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col justify-start">
                        <div>
                            {title}
                        </div>
                        <div>
                            {subtitle}
                        </div>
                    </CardFooter>
                </Card>
            </DialogTrigger>
            <DialogContent className="">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {subtitle}
                    </DialogDescription>
                </DialogHeader>
                <div className='relative min-h-80'>
                    <Image src={img}
                        objectFit="contain"
                        alt="Service image background"
                        className='h-full w-full'
                        fill
                    />
                </div>
                <DialogFooter>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}

export default PortfolioCard