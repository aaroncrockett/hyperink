import SignInWithGoogle from "./WithGoogle";
import { Page } from "@hyperink/ui-react/components";

export default function LoginPage() {
  return (
    <Page>
      <div className="flex flex-col justify-center items-center gap-4 bg-secondary-200-800/40 p-4 rounded-xl">
        <h1 className="text-center">Sign In / Sign Up</h1>
        <p className="text-center">More login methods are coming soon!</p>
        <SignInWithGoogle />
      </div>
    </Page>
  );
}
