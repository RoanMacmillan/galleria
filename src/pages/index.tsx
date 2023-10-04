import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import '../styles/globals.css'
import GalleryIndex from "@/components/GalleryIndex";
import NewsLetter from "@/components/NewsLetter";
import Featured from "@/components/Featured";
import Create from "@/components/Create";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`${inter.className} relative`}>
        <Header />
        <Hero />
        <GalleryIndex />
        <Featured />

        <NewsLetter />
        <Create />
        <Footer />
      </main>
    </>
  );
}
