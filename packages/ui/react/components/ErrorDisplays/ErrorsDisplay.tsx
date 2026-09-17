import { ErrorDisplay } from "./ErrorDisplay";

type FormErrorsProps = {
  errors?: Record<string, string> | null;
  excludeKeys?: readonly string[];
};

export function ErrorsDisplay({ errors, excludeKeys = [] }: FormErrorsProps) {
  if (!errors) return null;

  return (
    <>
      {Object.entries(errors)
        .filter(([key]) => !excludeKeys.includes(key))
        .map(([key, error]) => (
          <div key={key}>
            <ErrorDisplay error={error} />
          </div>
        ))}
    </>
  );
}
