export function OptionsChips({
  optionStr,
  unselectedOptions,
  onSelect,
}: {
  optionStr: string;
  unselectedOptions: string[];
  onSelect: (option: string, action: string) => void;
}) {
  const options = optionStr.split(",").filter(Boolean);

  return (
    <div className="flex flex-col gap-8 p-4 pt-6 rounded bg-surface-200-800/30">
      <div className="space-y-2">
        <p className="text-lg font-bold">Selected:</p>
        {options.length > 0 && (
          <div className="flex flex-row flex-wrap gap-4">
            {options.map((option) => (
              <span
                key={option}
                className="font-bold cursor-pointer chip bg-primary-500 hover:bg-secondary-300 text-surface-950!"
                onClick={() => onSelect(option, "remove")}
              >
                {option}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="space-y-2">
        <p className="text-lg font-bold">Unselected:</p>
        {unselectedOptions.length > 0 && (
          <div className="flex flex-row flex-wrap gap-4">
            {unselectedOptions.map((option) => (
              <span
                key={option}
                className="font-bold cursor-pointer chip bg-surface-900-100 hover:bg-primary-600-400 text-surface-50!"
                onClick={() => onSelect(option, "add")}
              >
                {option}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
