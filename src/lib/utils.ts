import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

export function truncate(str: string, length: number) {
  return str.length > length ? `${str.substring(0, length)}...` : str
}

export function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2)
}

export function getStatusColor(status: string) {
  switch (status.toLowerCase()) {
    case "active":
    case "success":
    case "approved":
      return "text-green-500"
    case "pending":
    case "processing":
      return "text-yellow-500"
    case "failed":
    case "rejected":
    case "error":
      return "text-red-500"
    default:
      return "text-gray-500"
  }
}

export function getStatusBgColor(status: string) {
  switch (status.toLowerCase()) {
    case "active":
    case "success":
    case "approved":
      return "bg-green-500/10"
    case "pending":
    case "processing":
      return "bg-yellow-500/10"
    case "failed":
    case "rejected":
    case "error":
      return "bg-red-500/10"
    default:
      return "bg-gray-500/10"
  }
}
