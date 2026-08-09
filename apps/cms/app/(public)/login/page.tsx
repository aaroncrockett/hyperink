import { login, signup } from "./actions";
import SignInWithGoogle from "./WithGoogle";

export default function LoginPage() {
  return (
    <>
      <form className="mx-auto w-full max-w-md space-y-4">
        <label className="label">
          <span className="label-text">Input</span>
          <input
            className="input"
            name="email"
            type="email"
            placeholder="Input"
          />
        </label>

        <label className="label">
          <span className="label-text">Input: password</span>
          <input
            className="input"
            name="password"
            type="password"
            placeholder="Input"
          />
        </label>

        <button
          className="btn btn preset-filled-primary-400-600"
          formAction={login}
        >
          Log in
        </button>
        <button
          className="btn btn preset-filled-primary-400-600"
          formAction={signup}
        >
          Sign up
        </button>
      </form>
      <SignInWithGoogle />
    </>
  );
}
