import { login, signup } from "./actions";

export default function LoginPage() {
  return (
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

      <button className="btn preset-filled-secondary-500" formAction={login}>
        Log in
      </button>
      <button className="btn preset-filled-secondary-500" formAction={signup}>
        Sign up
      </button>
    </form>
  );
}
