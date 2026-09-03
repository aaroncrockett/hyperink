//local
import type { ClientTattoo as ClientTattoo_src } from "@hyperinkstudio/services";

import { Data } from "../types";

export type ClientTattoo = ClientTattoo_src;

export type ClientTattooFormKey = keyof ClientTattoo_src;

export type ClientTattooData<T> = Data<ClientTattooFormKey> & {
  createdAt?: string | null;
};
