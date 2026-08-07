import type { AuthUser } from "@hyperinkstudio/db";
import { IsLoggedIn } from "./IsLoggedIn";
import { IsLoggedOut } from "./IsLoggedOut";
import { Page, Heading } from "@hyperinkstudio/ui-react-next/components";

type AdminPageComponentProps = {
  title: string;
  user: AuthUser | null;
  pvtProfileId: string | null;
  children: React.ReactNode;
};

export function AdminPageComponent({
  title,
  user,
  pvtProfileId,
  children,
}: AdminPageComponentProps) {
  return (
    <Page>
      {pvtProfileId && user ? (
        <IsLoggedIn user={user}>
          <Heading text={title} as="h2" />
          {children}
        </IsLoggedIn>
      ) : (
        <IsLoggedOut />
      )}
    </Page>
  );
}
