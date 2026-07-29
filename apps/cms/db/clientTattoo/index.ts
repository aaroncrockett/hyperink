import type { ClientTattoo as ClientTattooDb } from "../types";
import { EDITABLE_CLIENT_TATT_COLS_LIST as EDITABLE_CLIENT_TATT_COLS_LIST_DB } from "@hyperinkstudio/db";

export type ClientTattoo = ClientTattooDb;
export const EDITABLE_CLIENT_TATT_COLS_LIST = EDITABLE_CLIENT_TATT_COLS_LIST_DB;

import {
  getClientTattoosByClientId as getClientTattooByClientIdDb,
  createClientTattoo as createClientTattooDb,
} from "@hyperinkstudio/db";

export const getClientTattoosByClientId = getClientTattooByClientIdDb;
export const createClientTattoo = createClientTattooDb;
