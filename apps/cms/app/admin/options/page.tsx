import { Page } from "@hyperink/ui-react/components";
//
import { NextLinkWrapper } from "@/ui";

export default async function TaggingOptsPage() {
  return (
    <Page>
      <ul>
        <li>
          <NextLinkWrapper href="options/tagging">Tagging</NextLinkWrapper>
        </li>
      </ul>
      <h1 className="hI-h1">Profile Options</h1>
      <p>Customize your options for your own tattoo workflow and forms</p>
    </Page>
  );
}
