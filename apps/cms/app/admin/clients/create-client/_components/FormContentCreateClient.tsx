import { CREATE_CLIENT_COLS_LIST } from "@/db/api/clientPersons";
import { Input, InputCheck } from "@hyperinkstudio/ui-react-next/components/";

export function FormContentCreateClient({
  errors,
}: {
  errors: Record<string, string> | null;
}) {
  return (
    <>
      {CREATE_CLIENT_COLS_LIST.map(({ id, label, type }) => (
        <Input
          key={id}
          id={id}
          name={id}
          label={label}
          type={type}
          errors={errors}
        />
      ))}

      <InputCheck
        id="create_tattoo"
        name="create_tattoo"
        label="Create A Corresponding Tattoo Record"
        errors={errors}
      />
    </>
  );
}
