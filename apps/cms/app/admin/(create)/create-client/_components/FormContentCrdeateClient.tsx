import { CreateClientColsOptions } from "@/utils/db/clientPersons";
import { Input, InputCheck } from "@hyperinkstudio/ui-react/components/client/";

export default function FormContentCreateClient({
  errors,
}: {
  errors: Record<string, string> | null;
}) {
  return (
    <>
      {CreateClientColsOptions.map(({ value, label }) => (
        <Input
          key={value}
          id={value}
          name={value}
          label={label}
          type={
            value === "email" ? "email" : value === "phone" ? "tel" : "text"
          }
          errors={errors}
        />
      ))}

      <InputCheck
        id="create_tattoo"
        name="create_tattoo"
        label="Create Tattoo Record"
        errors={errors}
      />
    </>
  );
}
