import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getStatusColor = (status: string) => {
  switch (status) {
    case "New":
      return "bg-green-500 text-white";
    case "Assigned":
      return "bg-yellow-500 text-black";
    case "Completed":
      return "bg-blue-500 text-white";
    case "Cancelled":
      return "bg-red-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};
