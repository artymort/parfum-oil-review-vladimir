import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const imageUrl = `${protocol}://${host}/og.png`;
  const title = "Оставить отзыв — PARFUM OIL";
  const description = "Выберите магазин PARFUM OIL в Барнауле, поделитесь впечатлением и получите пробник аромата.";

  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: imageUrl, alt: "PARFUM OIL — ваше мнение, наш лучший ингредиент" }] },
    twitter: { card: "summary_large_image", title, description, images: [imageUrl] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
