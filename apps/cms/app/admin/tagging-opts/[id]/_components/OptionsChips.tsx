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
    <div className="flex flex-col gap-8 bg-surface-100-900/50 pt-6 p-4 rounded">
      <div className="space-y-2">
        <p className="text-lg font-bold">Selected:</p>
        {options.length > 0 && (
          <div className="flex flex-row gap-4">
            {options.map((option) => (
              <span
                key={option}
                className="chip bg-primary-50-950/40 hover:bg-surface-400-600 font-bold text-lg text-surface-950-50 cursor-pointer"
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
          <div className="flex flex-row gap-4">
            {unselectedOptions.map((option) => (
              <span
                key={option}
                className="chip bg-surface-500 hover:bg-primary-400-600 font-bold text-lg border-2 border-surface-500 cursor-pointer"
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
