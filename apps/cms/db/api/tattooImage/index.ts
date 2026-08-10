import { getTattooImages as dbGetTattooImages } from "@hyperinkstudio/db";
import { updateTattooImage as dbUpdateTattooImage } from "@hyperinkstudio/db";
import { storeTattooImageData as dbStoreTattooImageData } from "@hyperinkstudio/db";
import { uploadTattooImage as dbUploadTattooImage } from "@hyperinkstudio/db";

export const getTattooImages = dbGetTattooImages;
export const updateTattooImage = dbUpdateTattooImage;
export const storeTattooImageData = dbStoreTattooImageData;
export const uploadTattooImage = dbUploadTattooImage;
