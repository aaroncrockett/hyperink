import type { AuthUser, Profile } from "@hyperinkstudio/api";
import type { Client } from "@hyperinkstudio/backend-services";

export type AdminPageProps = {
  user: AuthUser;
  dbClient?: Client;
  pvtProfile?: Profile;
  pvtProfileId?: string;
  children: (props: AdminPageProps) => React.ReactNode;
};
