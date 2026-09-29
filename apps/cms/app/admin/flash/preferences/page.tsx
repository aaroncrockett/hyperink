import { Page } from "@hyperink/ui-react/components";
import { ViewTransition } from "@/ui";
export default function PreferencesPage() {
  return (
    <ViewTransition transition="slide">
      <Page className=" bg-surface-50-950 h-full">
        <h1 className="hI-h1">Preferences</h1>
      </Page>
    </ViewTransition>
  );
}
