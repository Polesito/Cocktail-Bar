import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cocktail Bar",
  description: " A simple cocktail bar using Next.js and TailwindCSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex flex-row items-center justify-center lg:gap-20 md:gap-10 gap-5 p-1 text-xl font-bold bg-slate-600 text-slate-900">
          <Link href="/">
            <h1 className="">Inicio</h1>
          </Link>
          <Link href="/cocktails">
            <h1>Cocktails</h1>
          </Link>
          <Link href="/users">
            <h1>API Users</h1>
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
