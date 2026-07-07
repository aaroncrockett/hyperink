// FormContent.tsx
import { TATTOO_FORM_COLS } from "../helpers";
import { EDITABLE_TATTOO_COLS } from "@inktree/db";

export default function FormContent() {
  return (
    <>
      {TATTOO_FORM_COLS.map(({ key, inputType }) => (
        <div key={key}>
          <label>{EDITABLE_TATTOO_COLS[key].name}</label>

          {inputType === "text" && (
            <input type="text" className="input" name={key} />
          )}

          {inputType === "number" && (
            <input type="number" className="input" name={key} />
          )}

          {inputType === "checkbox" && (
            <input type="checkbox" className="checkbox" name={key} />
          )}

          {inputType === "textarea" && (
            <textarea className="textarea" name={key} />
          )}

          {inputType === "select" && (
            <select className="select" name={key}>
              <option value="">Select...</option>
            </select>
          )}
        </div>
      ))}
    </>
  );
}
