type DocItem = {
  name: string;
  description: string;
  type: string;
};

type DocItemsProps = {
  items: DocItem[];
};

export function DocItems({ items }: DocItemsProps) {
  return (
    <ul className="flex flex-col gap-1">
      {items.map((item) => (
        <li
          className="even:bg-surface-100-900 odd:bg-surface-50-950 p-2 rounded-xl"
          key={item.name}
        >
          <span className="font-bold">{item.name}</span> -{" "}
          <span className="italic">{item.type}</span>: {item.description}
        </li>
      ))}
    </ul>
  );
}
