"use client";
import { useState } from "react";
//
import { Form, InputCheck } from "@hyperink/ui-react-next/components";
import { formatPhone } from "@hyperink/utils";
//
import { Input } from "@hyperink/utils";
//
import { type AuthMetadata } from "@/app/helpers";
// import {
//   INTRO_PROFILE_TEXT_INPUTS_LIST as TEXT_INPUTS_LIST,
//   ID,
//   INTRO_PROFILE_CHECK_INPUTS_LIST as CHECK_INPUT_LIST,
// } from "@/business/profile";
//
import { createIntroProfileData } from "../action";

type IntroProfile = {
  authMetaData?: AuthMetadata | undefined;
  userId: string;
};
export function IntroProfileForm({ authMetaData, userId }: IntroProfile) {
  const name = (authMetaData && authMetaData.name) ?? "";
  const email = (authMetaData && authMetaData.email) ?? "";
  const phone = (authMetaData && authMetaData.phone) ?? "";
  const [phoneState, setPhoneState] = useState(phone);

  const inputDefaults = {
    phone: phone,
    email: email,
    preferred_name: name,
  };

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="text-center">
        <p>
          This app is currently in private beta and access is limited to invited
          users.
        </p>
        <p>
          Fill out some contact info and I will get back with you within a
          couple of days.
        </p>
      </div>
      <Form
        action={createIntroProfileData}
        className="gap-4 grid grid-cols-1 md:grid-cols-2 bg-surface-200-800/20 p-6 rounded"
      >
        {/* <Input
          wrapperCls="hidden"
          type="hidden"
          id={ID.id}
          name={ID.id}
          value={userId}
        /> */}
        {/* {TEXT_INPUTS_LIST.map((input) => {
          if (input.type === "phone") {
            <Input
              key={input.id}
              id={input.id}
              type={input.type}
              name={input.id}
              label={input.label}
              value={phoneState}
              onChange={(e) => {
                const value = (e.target as HTMLInputElement).value;
                setPhoneState(formatPhone(value));
              }}
            />;
          }
          return (
            <Input
              key={input.id}
              id={input.id}
              type={input.type}
              name={input.id}
              label={input.label}
              defaultValue={
                inputDefaults[input.id as keyof typeof inputDefaults]
              }
            />
          );
        })} */}

        <div className="flex flex-col gap-2 md:col-span-2 bg-surface-200-800/60 px-4 pt-2 pb-3 rounded-xl font-bold">
          <p className="text-lg">Preferred Contact Methods:</p>
          <div className="sm:flex sm:flex-row gap-4 grid grid-cols-2">
            {/* {CHECK_INPUT_LIST.map((input) => {
              return (
                <InputCheck
                  key={input.id}
                  id={input.id}
                  name={input.id}
                  label={input.label}
                />
              );
            })} */}
          </div>
        </div>
      </Form>
    </div>
  );
}
