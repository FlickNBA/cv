import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./header";
import Editing from "./editing";
import Preview from "./preview";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [emailAddress, setEmailAddress] = useState("john@doe.com");
  const [phoneNumber, setPhoneNumber] = useState("666 999 333");
  const [city, setCity] = useState("Warsaw");
  const [profilePicture, setProfilePicture] = useState("");

  return (
    <div className={`w-full min-h-screen text-whitee p-4 grid grid-cols-2 grid-rows-[2fr_17fr_1fr] gap-4 ${inter.className}`}>
      <Header />
      <Editing firstName={firstName} lastName={lastName} emailAddress={emailAddress} phoneNumber={phoneNumber} city={city} setProfilePicture={setProfilePicture} profilePicture={profilePicture} />
      <Preview firstName={firstName} lastName={lastName} emailAddress={emailAddress} phoneNumber={phoneNumber} city={city} profilePicture={profilePicture} />
      <Footer />
    </div>
  );
}
