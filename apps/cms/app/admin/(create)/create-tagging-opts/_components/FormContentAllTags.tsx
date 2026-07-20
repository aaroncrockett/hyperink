// FormContent.tsx
"use client";
import { default as FormContentTagItem } from "./FormContentTagItem";

type FormContentProps = {
  value: string;
  label: string;
  items: string[];
  input: string;
  setInput: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  addItem: (key: string) => void;
  removeItem: (key: string, item: string) => void;
};

export default function FormContentAllTags({
  value,
  label,
  items,
  input,
  setInput,
  addItem,
  removeItem,
}: FormContentProps) {
  return (
    <div className="p-4 rounded bg-surface-100/60 flex flex-col gap-2">
      <p className="text-xl">{label}</p>

      {items.map((item) => (
        <FormContentTagItem
          key={item}
          value={value}
          item={item}
          removeItem={removeItem}
        />
      ))}

      <input
        value={input}
        className="input"
        onChange={(e) =>
          setInput((prev) => ({
            ...prev,
            [value]: e.target.value,
          }))
        }
      />

      <button
        type="button"
        className="btn preset-filled-tertiary-500"
        onClick={() => addItem(value)}
      >
        Add
      </button>
    </div>
  );
}
