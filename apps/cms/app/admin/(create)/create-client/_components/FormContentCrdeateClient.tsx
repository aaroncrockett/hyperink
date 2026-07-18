import { CreateClientColsOptions } from "@/app/admin/(data)";

export default function FormContentCreateClient({
  errors,
}: {
  errors: Record<string, string>;
}) {
  return (
    <>
      {CreateClientColsOptions.map(({ value, label }) => (
        <div key={value}>
          <label htmlFor={value} className="label">
            {label}
          </label>

          <input
            id={value}
            name={value}
            type={
              value === "email" ? "email" : value === "phone" ? "tel" : "text"
            }
            className="input"
          />

          {errors[value] && <p className="text-red-500">{errors[value]}</p>}
        </div>
      ))}

      <div className="flex flex-row gap-2 items-center">
        <label htmlFor="create_tattoo" className="label">
          Create Tattoo Record
        </label>

        <input
          id="create_tattoo"
          name="create_tattoo"
          type="checkbox"
          value="true"
          className="checkbox"
        />

        {errors.create_tattoo && (
          <p className="text-red-500">{errors.create_tattoo}</p>
        )}
      </div>
    </>
  );
}
