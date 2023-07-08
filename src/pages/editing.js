import { Input, ImageInput } from "./utils";
import { useState } from "react";
import Preview from "./preview";

function PersonalDetails(props) {
  console.log(props);
  return (
    <>
      <h1 className="mb-2 text-2xl text-whitee font-medium">Personal Details:</h1>
      <Input type="text" placeholder="First name" value={props.firstName} state={props.setFirstName} />
      <Input type="text" placeholder="Last name" value={props.lastName} state={props.setLastName} />
      <Input type="email" placeholder="Email address" value={props.emailAddress} state={props.setEmailAddress} />
      <Input type="tel" placeholder="Phone number" value={props.phoneNumber} state={props.setPhoneNumber} />
      <Input type="text" placeholder="City" value={props.city} state={props.setCity} />
      <ImageInput state={props.setProfilePicture} placeholder="Upload your photo" />
    </>
  );
}

function Education(education, setEducation) {
  return (
    <>
      <h1 className="mb-2 text-2xl text-whitee font-medium">Education:</h1>
      <Input type="text" placeholder="University" value={education.education.university} state={setEducation} />
      <Input type="text" placeholder="Description" value={education.education.description} state={setEducation} />
      <Input type="num" placeholder="From" value={education.education.from} state={setEducation} />
      <Input type="num" placeholder="To" value={education.education.to} state={setEducation} />
    </>
  );
}

export default function Editing(props) {
  console.log(props);
  return (
    <div className="bg-whitee p-6 border-4 border-whitee border-opacity-50 bg-opacity-25 text-grayyy backdrop-blur-sm rounded-2xl w-full flex flex-col justify-center items-center">
      <PersonalDetails {...props} />
      {props.education.map((e) => {
        return <Education education={e} setEducation={props.setEducation} />;
      })}
    </div>
  );
}
