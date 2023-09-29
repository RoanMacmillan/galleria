import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import '../styles/globals.css'
import GalleryIndex from "@/components/GalleryIndex";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`${inter.className} relative`}>
        <Header />
        <Hero />
        <GalleryIndex />
      </main>
    </>
  );
}
