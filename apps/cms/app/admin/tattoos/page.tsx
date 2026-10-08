import { Page } from "@hyperink/ui-react/components";
//
import { ErrorDisplay } from "@hyperink/ui-react/components";
import { getUsersFlashAndTagOptions } from "@hyperink/api-domain-helpers/flash";
//
import { createSSClient, getAuthedUser } from "@/auth/server";
import { ViewTransition } from "@/ui";
//
import { initTattoos } from "./helpers";
import { Tattoos } from "./_components/Tattoos";
//
export default async function TattoosPage() {
  const client = await createSSClient();

  const {
    data: { user },
  } = await getAuthedUser(client);

  if (!user) return <ErrorDisplay error="no authed user" />;

  // const { data: optsData, error: optsError } = await getUsersFlashAndTagOptions(
  //   client,
  //   user.id,
  // );

  // const flashOpts = optsData?.flashOpts;
  // const tagOpts = optsData?.tagOpts;
  // const collections = tagOpts?.collections ?? [];

  // if (optsError) return <ErrorDisplay error="get options error" />;

  // const { defaultCollection, tattooData, flashError, initMsg } =
  //   await initFlash(client, user.id, flashOpts);

  // if (flashError) return <ErrorDisplay error="get flash error" />;

  // if (!tattooData)
  //   return (
  //     <ViewTransition transition="slide">
  //       <Page className="bg-surface-50-950 h-full">
  //         <p className="p-2 rounded card preset-filled-warning-500">
  //           NoFlash yet! Add some! :D
  //         </p>
  //       </Page>
  //     </ViewTransition>
  //   );

  return (
    <ViewTransition transition="slide">
      <Page className="bg-surface-50-950 h-full">
        Tattoos page placeholder
        {/* {defaultCollection === "" && (
          <p className="p-2 rounded card preset-filled-warning-500">
            {initMsg}
          </p>
        )}

        <Tattoos
          tattoos={tattooData}
          collection={defaultCollection}
          collections={collections}
          user_id={user.id}
        /> */}
      </Page>
    </ViewTransition>
  );
}
