import { getTattooImages as dbGetTattooImages } from "@hyperinkstudio/api";
import { updateTattooImage as dbUpdateTattooImage } from "@hyperinkstudio/api";
import { storeTattooImageData as dbStoreTattooImageData } from "@hyperinkstudio/api";
import { uploadTattooImage as dbUploadTattooImage } from "@hyperinkstudio/api";

export const getTattooImages = dbGetTattooImages;
export const updateTattooImage = dbUpdateTattooImage;
export const storeTattooImageData = dbStoreTattooImageData;
export const uploadTattooImage = dbUploadTattooImage;
