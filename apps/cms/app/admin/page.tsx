import { ErrorDisplay } from "@hyperink/ui-react/components";
//
import { init } from "./_helpers";

export default async function Admin() {
  const initialized = await init();

  if (initialized?.error) {
    return <ErrorDisplay error={initialized.error.message} />;
  }

  return (
    <div>
      <p>Hey</p>
    </div>
  );
}
