// FormContentTagItem.tsx
"use client";

type FormContentTagItemProps = {
  value: string;
  item: string;
  removeItem: (key: string, item: string) => void;
};

export default function FormContentTagItem({
  value,
  item,
  removeItem,
}: FormContentTagItemProps) {
  return (
    <div className="p-1 rounded inline" key={item}>
      <button
        className="chip btn btn preset-filled-primary-400-600 inline"
        type="button"
        onClick={() => removeItem(value, item)}
      >
        <span>{item}</span> X
      </button>

      <input type="hidden" name={value} value={item} />
    </div>
  );
}
