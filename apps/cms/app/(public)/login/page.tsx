// import { login, signup } from "./actions";
import SignInWithGoogle from "./WithGoogle";
import { Page, Heading } from "@/ui";

export default function LoginPage() {
  return (
    <Page>
      <div className="flex-col flex justify-center items-center gap-4 bg-secondary-200-800/40 rounded-xl p-4">
        {/* <form className="w-full max-w-md mx-auto space-y-4">
        <Input name="email" type="email" label="Email" />

        <label className="label">
          <span className="label-text">Input: password</span>
          <input
            className="input"
            name="password"
            type="password"
            placeholder="Input"
          />
        </label>

        <Button formAction={login}>Log in</Button>
        <Button
          className="btn preset-filled-primary-400-600"
          formAction={signup}
        >
          Sign up
        </Button>
      </form> */}
        <Heading cls="text-center" as="h3">
          Sign In / Sign Up
        </Heading>
        <p className="text-center">More login methods are coming soon!</p>
        <SignInWithGoogle />
      </div>
    </Page>
  );
}
