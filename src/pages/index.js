import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./header";
import Editing from "./editing";
import Preview from "./preview";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // Personal Details
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [emailAddress, setEmailAddress] = useState("john@doe.com");
  const [phoneNumber, setPhoneNumber] = useState("666 999 333");
  const [city, setCity] = useState("Manchester");
  const [profilePicture, setProfilePicture] = useState("");

  //Education
  const [education, setEducation] = useState([
    {
      university: "The Odin Project",
      description: "Full Stack JavaScript",
      from: 2022,
      to: 2023,
    },
  ]);

  return (
    <div className={`w-full h-screen text-whitee p-4 grid grid-cols-2 grid-rows-[2fr_17fr_1fr] gap-4 ${inter.className}`}>
      <Header />
      <Editing firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} emailAddress={emailAddress} setEmailAddress={setEmailAddress} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} city={city} setCity={setCity} setProfilePicture={setProfilePicture} profilePicture={profilePicture} education={education} setEducation={setEducation} />
      <Preview firstName={firstName} lastName={lastName} emailAddress={emailAddress} phoneNumber={phoneNumber} city={city} profilePicture={profilePicture} />
      <Footer />
    </div>
  );
}
