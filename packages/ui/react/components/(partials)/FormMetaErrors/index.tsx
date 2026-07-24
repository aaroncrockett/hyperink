import { FormError } from "../../FormError";

type FormErrorsProps = {
  errors?: Record<string, string> | null;
  excludeKeys?: readonly string[];
};

export function FormMetaErrors({ errors, excludeKeys = [] }: FormErrorsProps) {
  if (!errors) return null;

  return (
    <>
      {Object.entries(errors)
        .filter(([key]) => !excludeKeys.includes(key))
        .map(([key, error]) => (
          <div key={key}>
            <FormError error={error} />
          </div>
        ))}
    </>
  );
}
