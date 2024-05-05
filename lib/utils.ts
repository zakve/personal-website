import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const scrollToContact = () => {
  const element = document.getElementById('#contact');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};