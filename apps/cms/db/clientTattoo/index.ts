import type { ClientTattoo as ClientTattooDb } from "../types";

export type ClientTattoo = ClientTattooDb;

import { getClientTattoosByClientId as getClientTattooByClientIdDb } from "@hyperinkstudio/db";

export const getClientTattoosByClientId = getClientTattooByClientIdDb;
