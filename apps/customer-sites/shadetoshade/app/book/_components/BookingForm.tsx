"use client";
import { useState, useActionState } from "react";
// hyperink
import { INPUT_TYPES_MAP } from "@hyperinkstudio/business";
//
import { toLabelValue, formatPhone } from "@hyperinkstudio/utils";
//
import {
  Form,
  Input,
  Select,
  InputTextArea,
  FormMetaErrors,
} from "@hyperinkstudio/ui-react-next/components";

// @'s
import { TATT_REQ_BODY, TYPE_FIELD } from "@/business/tattooRequest";

// local
import { FlashAside } from "./FlashAside";
import { createTattooRequestAction } from "../actions";

type BookingFormProps = {
  flashId?: string;
  flashName?: string;
  clearFlashUrlParams: () => void;
};

export function BookingForm({
  flashId,
  flashName,
  clearFlashUrlParams,
}: BookingFormProps) {
  const [showFormBody, setShowFormBody] = useState(false);
  const [phone, setPhone] = useState("");

  const initialState = {
    errors: null,
    tattooRequest: null,
  };

  const [tattReq, tattReqActionState, tattReqPending] = useActionState(
    createTattooRequestAction,
    initialState,
  );

  const handleTypeChange = (
    e: React.ChangeEvent<HTMLDivElement | HTMLSelectElement>,
  ) => {
    const value = "value" in e.currentTarget ? e.currentTarget.value : "";

    if (value === "flash") {
      window.location.href = "/flash?book=true";
    }

    if (value === "custom") setShowFormBody(true);
  };
  return (
    <Form
      action={tattReqActionState}
      className="flex flex-col gap-2 md:gap-4"
      submitBtnCls="rounded-xl"
    >
      {flashId && flashName && (
        <FlashAside
          clearFlashUrlParams={clearFlashUrlParams}
          flashName={flashName}
          flashId={flashId}
        />
      )}
      {!flashId && (
        <Select
          options={TYPE_FIELD.options.map((opt) => toLabelValue(opt))}
          id={TYPE_FIELD.id}
          onChange={handleTypeChange}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
        {((flashId && flashName) || showFormBody) &&
          TATT_REQ_BODY.map((req) => {
            if (!req) return null;

            if (INPUT_TYPES_MAP[req.type] === "textarea") {
              return (
                <InputTextArea
                  key={req.id}
                  name={req.id}
                  id={req.id}
                  label={req.label}
                  required={req.required ?? false}
                />
              );
            }

            if (req.id === "phone") {
              return (
                <Input
                  key={req.id}
                  id={req.id}
                  label={req.label}
                  required={req.required ?? false}
                  type={INPUT_TYPES_MAP[req.type]}
                  value={phone}
                  onChange={(e) => {
                    const value = (e.target as HTMLInputElement).value;
                    setPhone(formatPhone(value));
                  }}
                />
              );
            }

            return (
              <Input
                key={req.id}
                id={req.id}
                label={req.label}
                required={req.required ?? false}
                type={INPUT_TYPES_MAP[req.type]}
              />
            );
          })}
        <Input
          type="hidden"
          name="flash_name"
          id="flash_name"
          value={flashName}
        />
        <Input type="hidden" name="flash_id" id="flash_id" value={flashId} />
        <Input
          type="hidden"
          name="title"
          id="title"
          value={flashId ? "Flash: " + flashName : "custom"}
        />
        <Input
          type="hidden"
          name="type"
          id="type"
          value={flashId ? "flash" : "custom"}
        />
      </div>
      {tattReqPending && <p>pending tattoo request</p>}
      {tattReq.errors && <FormMetaErrors errors={tattReq.errors} />}
    </Form>
  );
}
