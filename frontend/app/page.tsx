
import { Appbar } from "@/components/appbar";
import Footer from "@/components/Footer";
import { Hero } from "@/components/hero";
import { Herodata } from "@/components/Herodata";
import Herosection from "@/components/Herosection";

import Image from "next/image";

export default function Home() {
  return (
  <main className="">
    <Appbar/>
    <Hero/>
    <Herodata/>
    <Herosection/>
    <Footer/>
    
  </main>
  );
}
