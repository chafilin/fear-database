import "./globals.css";
import type { Metadata } from "next";

export const meta: Metadata = {
  title: "Бюро Исследований Паранормальных Явлений",
  description: "Миссия Джейлбрик",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
