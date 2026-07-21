import type { Dispatch, SetStateAction } from "react";
import type { ProfileTaggingOptions } from "@hyperinkstudio/db";

type FormContentTaggingPhotosProps = {
  tagOpts: string[] | null;
  chosenTagOpts: string[] | null;
  value: keyof ProfileTaggingOptions;
  setTagOpts: Dispatch<SetStateAction<string[]>>;
  setChosenTagOpts: Dispatch<SetStateAction<string[]>>;
  label: string;
};

export default function FormContentTaggingPhotos({
  tagOpts,
  chosenTagOpts,
  setTagOpts,
  setChosenTagOpts,
  value,
  label,
}: FormContentTaggingPhotosProps) {
  function choose(opt: string) {
    if (value === "collections" && (chosenTagOpts?.length ?? 0) >= 1) {
      alert("Only one collection can be selected.");
      return;
    }

    setTagOpts((prev) => ({
      ...prev,
      [value]: prev[value].filter((v) => v !== opt),
    }));

    setChosenTagOpts((prev) => ({
      ...prev,
      [value]: [...prev[value], opt],
    }));
  }

  function unchoose(opt: string) {
    setChosenTagOpts((prev) => ({
      ...prev,
      [value]: prev[value].filter((v) => v !== opt),
    }));

    setTagOpts((prev) => ({
      ...prev,
      [value]: [...prev[value], opt],
    }));
  }

  return (
    <div>
      <p className="font-bold text-2xl">{label}:</p>

      <div className="gap-2 bg-surface-100 flex flex-row p-2">
        Options:
        {tagOpts?.map((opt) => (
          <button
            className="bg-tertiary-300 chip"
            key={opt}
            type="button"
            onClick={() => choose(opt)}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="bg-surface-200/50 flex flex-row gap-2 p-2">
        Chosen Options:
        {chosenTagOpts?.map((opt) => (
          <div key={opt}>
            <button
              className="bg-tertiary-500 chip"
              type="button"
              onClick={() => unchoose(opt)}
            >
              {opt}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
