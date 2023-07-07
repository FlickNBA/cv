import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./header";
import Editing from "./editing";
import Preview from "./preview";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

console.log(inter);

export default function Home() {
  return (
    <div className={`w-full min-h-screen text-whitee p-4 grid grid-cols-2 grid-rows-[2fr_17fr_1fr] gap-4 ${inter.className}`}>
      <Header />
      <Editing />
      <Preview />
      <Footer />
    </div>
  );
}
