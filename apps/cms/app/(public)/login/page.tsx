import { login, signup } from "./actions";
import SignInWithGoogle from "./WithGoogle";
import { Button, Input } from "@/ui";

export default function LoginPage() {
  return (
    <>
      <form className="w-full max-w-md mx-auto space-y-4">
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
      </form>
      <SignInWithGoogle />
    </>
  );
}
