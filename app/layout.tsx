import type { Metadata } from "next";
import { Itim } from "next/font/google";
import "./globals.css";
import NavBarMain from "@/components/NavBarMain";

const itim = Itim({
  subsets: ["latin"],
  weight: ["400"],
});

// ตรงส่วนของ Metadata จะมีผลกับ SEO ของเว็บไซต์ และการแสดงผลของเว็บไซต์ใน Social Media ต่าง ๆ
export const metadata: Metadata = {
  title: "SAU Product SALE",
  description: "เว็บไซต์ขายสินค้าของนักศึกษา มหาวิทยาลัยเอเชียอาคเนย์",
  keywords: ["mobile", "laptop", "computer", "tablet", "accessories", "smartphone", "electronics", "gadget"],
  authors: [{ name: "MO SAU", url: "https://www.sauproductsale.com" }],
  openGraph: {
    title: "SAU Product SALE",
    description: "เว็บไซต์ขายสินค้าของนักศึกษา มหาวิทยาลัยเอเชียอาคเนย์",
    url: "https://www.sauproductsale.com",
    siteName: "SAU Product SALE",
    locale: "th_TH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${itim.className}`}>
      <body className="min-h-full flex flex-col bg-pink-200">
        <NavBarMain />
        {children}
        <hr />
        <h3 className="text-center mt-4">
          © 2026 SAU Product SALE. All rights reserved. | Developed by NAMO SAU
        </h3>
      </body>
    </html>
  );
}
