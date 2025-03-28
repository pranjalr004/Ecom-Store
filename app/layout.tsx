import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "OneEntry Ecommerce App",
  description: "Created By Pranjal Rai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-100">
      <body
      >
        {children}
      </body>
    </html>
  );
}
