import Link from "next/link";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <div className="flex justify-between">
            <div>
                <Link href='#home'>
                    <Button variant='ghost'>Home</Button>
                </Link>
                <Link href='#services'>
                    <Button variant='ghost'>Services</Button>
                </Link>
                <Link href='#portfolio' >
                    <Button variant='ghost'>Portfolio</Button>
                </Link>
                <Link href='#contact'>
                    <Button variant='ghost'>Contact</Button>
                </Link>
            </div>
            <div>
                <ThemeToggle />
            </div>
        </div>
    )
}