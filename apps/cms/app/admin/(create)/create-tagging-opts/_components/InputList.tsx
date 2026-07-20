import { useState } from "react";
import { Input } from "@hyperinkstudio/ui-react/components/client";
type TagInputListProps = {
  value: string;
  label: string;
};

export default function InputList({ value, label }: TagInputListProps) {
  const [items, setItems] = useState([""]);

  return (
    <>
      {items.map((_, index) => (
        <Input
          id={value}
          key={index}
          name={label}
          label={index === 0 ? label : ""}
        />
      ))}

      <button type="button" onClick={() => setItems((prev) => [...prev, ""])}>
        Add {label}
      </button>
    </>
  );
}
