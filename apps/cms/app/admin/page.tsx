import { ErrorDisplay } from "@hyperink/ui-react/components";
//
import { init } from "./_helpers";

export default async function Admin() {
  const initialized = await init();

  if (initialized?.error) {
    return <ErrorDisplay error={initialized.error.message} />;
  }

  if (initialized?.notVerified) {
    return (
      <p className="text-tertiary-500 text-2xl">{initialized.notVerified}</p>
    );
  }

  return (
    <div>
      <button className="hI-btn-primary">hi hi</button>
    </div>
  );
}
