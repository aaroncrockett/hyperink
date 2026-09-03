//local
import type { ClientAsClientPerson as ClientAsClientPerson_src } from "@hyperinkstudio/services";

import { Data } from "../types";

export type ClientAsClientPerson = ClientAsClientPerson_src;

export type ClientAsClientPersonFormKey = keyof ClientAsClientPerson_src;

export type ClientAsClientPersonData<T> = Data<ClientAsClientPersonFormKey> & {
  createdAt?: string | null;
};
