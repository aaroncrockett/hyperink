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
    <div>
      <span className="md:text-2xl text-xl">
        Chosen Flash: {capitalizeWords(flashName ?? "")}
      </span>
      <Input type="hidden" name="flashId" id="flash_id" value={flashId} />
      <button type="button" onClick={clearFlashUrlParams}>
        Clear Flash
      </button>
    </div>
  );
}
