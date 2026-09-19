import { ErrorDisplay } from "@hyperink/ui-react/components";
//
import { init } from "./_helpers";

export default async function Admin() {
  const initialized = await init();

  if (initialized?.errors) {
    return <ErrorDisplay error={initialized.errors.userError} />;
  }

  if (initialized?.notVerified) {
    return (
      <p className="text-tertiary-500 text-2xl">{initialized.notVerified}</p>
    );
  }

  return <div>admin</div>;
}
