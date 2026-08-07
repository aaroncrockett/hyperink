import type { AuthUser, Client, Profile } from "@hyperinkstudio/db";

export type AdminPageProps = {
  user: AuthUser;
  dbClient?: Client;
  pvtProfile?: Profile;
  pvtProfileId?: string;
  children: (props: AdminPageProps) => React.ReactNode;
};
