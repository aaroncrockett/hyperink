export default function LoginPage() {
  return (
    <form className="mx-auto w-full max-w-md space-y-4">
      <label className="label">
        <span className="label-text">Input</span>
        <input className="input" type="email" placeholder="Input" />
      </label>

      <label className="label">
        <span className="label-text">Input: password</span>
        <input className="input" type="password" placeholder="Input" />
      </label>
    </form>
  );
}
