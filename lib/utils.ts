import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import * as d3 from "d3-color";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateAvatarFallback(string: string) {
  const names = string.split(" ").filter((name: string) => name);
  const mapped = names.map((name: string) => name.charAt(0).toUpperCase());

  return mapped.join("");
}

export function generateMeta({
  title,
  description,
  canonical
}: {
  title: string;
  description: string;
  canonical: string;
}): Metadata {
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  const dashboardBaseUrl = process.env.DASHBOARD_BASE_URL || 'http://localhost:3000';

  return {
    title: `${title} - Shadcn UI Kit`,
    description: description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/dashboard${canonical}`
    },
    openGraph: {
      images: [`${dashboardBaseUrl}/seo.jpg`]
    }
  };
}

export function getHSLValue(hex: string): string {
  return d3.color(hex)!.formatHsl().slice(4, -1).replaceAll(",", "");
}
