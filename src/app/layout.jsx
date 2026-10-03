import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bhikitia | The Digital Encyclopedia",
  description:
    "Bhikitia is a Bangladeshi digital encyclopedia featuring notable people, places, organizations, events, works, and other subjects from Bangladesh and around the world.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        <div className="flex min-h-screen flex-col">
          <header>
            <Navbar />
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer />
        </div>
      </body>
    </html>
  );
}