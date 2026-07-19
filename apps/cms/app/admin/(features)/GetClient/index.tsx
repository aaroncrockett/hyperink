import { LookupColOptions } from "@/utils/db/clientPersons";
import type { ClientTable } from "@hyperinkstudio/db";

export function FormContentGetClient({
  lookupType,
}: {
  lookupType: keyof ClientTable;
}) {
  const option = LookupColOptions.find((option) => option.value === lookupType);

  if (!option) return null;

  return (
    <div>
      <label htmlFor={option.value}>{option.label}</label>

      <input
        id={option.value}
        name={option.value}
        type={
          option.value === "email"
            ? "email"
            : option.value === "phone"
              ? "tel"
              : "text"
        }
        className="input"
        placeholder={`Client ${option.label.toLowerCase()}`}
      />
    </div>
  );
}
