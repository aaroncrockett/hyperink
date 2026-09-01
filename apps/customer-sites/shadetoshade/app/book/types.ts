import { type TattReqFormDisplay } from "@/business/tattooRequest";

export type TattReqFormDisplayWithFlash = TattReqFormDisplay & {
  flashId?: string;
  flashName?: string;
};
