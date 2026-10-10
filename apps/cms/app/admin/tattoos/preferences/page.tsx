import { Page } from "@hyperink/ui-react/components";

import { ViewTransition } from "@/ui";

export default async function PreferencesPage() {
  return (
    <ViewTransition transition="slide">
      <Page className=" bg-surface-50-950 h-full">
        <h1 className="hI-h1">Tattoo Preferences placeholder</h1>
        {/* <FlashOptions
          id={user.id}
          tagOpts={tagOptsData}
          defaultCollection={defaultCollection}
        /> */}
      </Page>
    </ViewTransition>
  );
}
