// FormContent.tsx

import { TATTOO_FORM_COLS } from "../helpers";
import { EDITABLE_CLIENT_TATTOO_COLS } from "@inktree/db";

type Props = {
  clientId: string;
  preferredName: string;
};

export function ClientTattooFormContent({ clientId, preferredName }: Props) {
  return (
    <>
      <h4>Create a tattoo record for: {preferredName}</h4>

      <input type="hidden" name="client_id" value={clientId} />

      {TATTOO_FORM_COLS.map(({ key, inputType }) => (
        <div
          className="flex flex-row justify-start items-center gap-2"
          key={key}
        >
          {inputType === "text" && (
            <>
              <label>{EDITABLE_CLIENT_TATTOO_COLS[key].name}</label>
              <input type="text" className="input" name={key} />
            </>
          )}

          {inputType === "number" && (
            <>
              <label>{EDITABLE_CLIENT_TATTOO_COLS[key].name}</label>
              <input type="number" className="input" name={key} />
            </>
          )}

          {inputType === "checkbox" && (
            <>
              <input type="checkbox" className="checkbox" name={key} />
              <label>{EDITABLE_CLIENT_TATTOO_COLS[key].name}</label>
            </>
          )}

          {inputType === "textarea" && (
            <>
              <label>{EDITABLE_CLIENT_TATTOO_COLS[key].name}</label>
              <textarea className="textarea" name={key} />
            </>
          )}

          {inputType === "select" && (
            <>
              <label>{EDITABLE_CLIENT_TATTOO_COLS[key].name}</label>
              <select className="select" name={key}>
                <option value="">Select...</option>
              </select>
            </>
          )}
        </div>
      ))}
    </>
  );
}
