import { capitalizeWords } from "@hyperinkstudio/utils";

import { Form, Input, Select } from "@hyperinkstudio/ui-react-next/components";

type FlashAsideProps = {
  flashId?: string;
  flashName?: string;
  clearFlashUrlParams: () => void;
};

export function FlashAside({
  flashId,
  flashName,
  clearFlashUrlParams,
}: FlashAsideProps) {
  return (
    <div className="flex gap-2 items-center justify-between w-full lg:w-2/3 xl:w-1/2 p-4 bg-surface-100-900/40 rounded-xl">
      <span className="md:text-2xl text-xl display">
        In cart:
        <span className="text-primary-500">
          <span className="mx-2 italic">Flash </span>
          {capitalizeWords(flashName ?? "")}
        </span>
      </span>
      <Input type="hidden" name="flashId" id="flash_id" value={flashId} />
      <span>
        <button
          type="button"
          className="btn btn-sm preset-filled-surface-200-800 font-bold rounded-xl"
          onClick={clearFlashUrlParams}
        >
          Clear Flash
        </button>
      </span>
    </div>
  );
}
