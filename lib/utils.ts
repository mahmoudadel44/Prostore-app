import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


//convert prisma object to regular js object

export function prismaToObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

