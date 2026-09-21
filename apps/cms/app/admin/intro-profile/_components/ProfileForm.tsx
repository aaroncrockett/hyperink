"use client";

import { createIntroProfileData } from "../action";

import { PROFILE_ID, PROFILE_METADATA_LIST, CHECK_LIST } from "../data";
import { type User } from "@hyperink/service-providers";
//
import {
  FormClient as Form,
  Input,
  InputCheck,
} from "@hyperink/ui-react/components";
//
import { ProviderMetadata } from "@/app/_helpers";

type IntroProfile = {
  user: User;
  userId: string;
  providerMetadata: ProviderMetadata;
};

export function ProfileForm({ user, userId, providerMetadata }: IntroProfile) {
  const name = (providerMetadata && providerMetadata.name) ?? "";
  const email = (providerMetadata && providerMetadata.email) ?? "";

  const inputDefaults = {
    email: email,
    preferred_name: name,
  };

  return (
    <Form
      action={createIntroProfileData}
      className="gap-4 grid grid-cols-1 md:grid-cols-2 bg-surface-200-800/20 p-6 rounded"
    >
      <Input
        wrapperClassName="hidden"
        type="hidden"
        id={PROFILE_ID.id.id}
        name={PROFILE_ID.id.id}
        value={userId}
      />
      {PROFILE_METADATA_LIST.map((input) => {
        return (
          <Input
            key={input.id}
            id={input.id}
            type={input.type}
            name={input.id}
            label={input.label}
            defaultValue={inputDefaults[input.id as keyof typeof inputDefaults]}
          />
        );
      })}

      <div className="flex flex-col gap-2 md:col-span-2 bg-surface-200-800/60 px-4 pt-2 pb-3 rounded-xl font-bold">
        <p className="text-lg">Preferred Contact Methods:</p>
        <div className="sm:flex sm:flex-row gap-4 grid grid-cols-2">
          {CHECK_LIST.map((input) => {
            return (
              <InputCheck
                key={input.id}
                id={input.id}
                name={input.id}
                label={input.label}
              />
            );
          })}
        </div>
      </div>
    </Form>
  );
}
