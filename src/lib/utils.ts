import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatEditionDate(date: Date = new Date()) {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function getEditionNumber(date: Date = new Date()) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  return String(day).padStart(3, "0");
}

export function isWeekendEdition(date: Date = new Date()) {
  const day = date.getDay();
  return day === 0 || day === 6;
}
