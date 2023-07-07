import { Input, ImageInput } from "./utils";
import { useState } from "react";
import Preview from "./preview";

function PersonalDetails(props) {
  console.log(props);
  return (
    <>
      <h1 className="mb-4 text-4xl text-whitee font-medium">Personal Details:</h1>
      <Input type="text" placeholder="First name" value={props.firstName} />
      <Input type="text" placeholder="Last name" value={props.lastName} />
      <Input type="email" placeholder="Email address" value={props.emailAddress} />
      <Input type="tel" placeholder="Phone number" value={props.phoneNumber} />
      <Input type="text" placeholder="City" value={props.city} />
      <ImageInput state={props.setProfilePicture} placeholder="Upload your photo" />
    </>
  );
}

export default function Editing(props) {
  console.log(props);
  return (
    <div className="bg-whitee p-6 border-4 border-whitee border-opacity-50 bg-opacity-25 text-grayyy backdrop-blur-sm rounded-2xl w-full flex flex-col justify-center items-center">
      <PersonalDetails {...props} />
    </div>
  );
}
