import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDateToDMYHM = (date?: Date) =>
  dayjs(date).format("DD/MM/YYYY - HH:mm") ?? "-";
