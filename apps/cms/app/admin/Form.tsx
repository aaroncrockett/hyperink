"use server";
type FormProps = {
  action: (formData: FormData) => Promise<void>;
  children: ReactNode;
};

export default async function Form({ action, children }: FormProps) {
  return (
    <form action={action}>
      {children}
      <button type="submit">Submit</button>
    </form>
  );
}
