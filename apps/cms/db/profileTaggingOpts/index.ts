import { z } from "zod";

import {
  upsertProfileTaggingOpts as upsertProfileTaggingOptsDb,
  getProfileTaggingOpts as getProfileTaggingOptsDb,
} from "@hyperinkstudio/db";

import type { ProfileTaggingOptions as ProfileTaggingOptionsDb } from "../types";

import { TAGGING_OPTS_BASE_FORM_LIST as TAGGING_OPTS_BASE_FORM_LIST_SHARED } from "@hyperinkstudio/shared-business/profileTaggingOptions";

export const TAGGING_OPTS_BASE_FORM_LIST = TAGGING_OPTS_BASE_FORM_LIST_SHARED;

export const upsertProfileTaggingOpts = upsertProfileTaggingOptsDb;
export const getProfileTaggingOpts = getProfileTaggingOptsDb;

export type ProfileTaggingOptions = ProfileTaggingOptionsDb;

export type ProfileTaggingOptsKey = keyof ProfileTaggingOptions;
