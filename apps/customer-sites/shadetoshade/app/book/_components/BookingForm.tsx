"use client";
import { useState } from "react";
//
import { INPUT_TYPES_MAP } from "@hyperinkstudio/business";
//
import { toLabelValue } from "@hyperinkstudio/utils";
//
import { Form, Input, Select } from "@hyperinkstudio/ui-react-next/components";
// @'s
import { TATT_REQ_BODY, TYPE_FIELD } from "@/business/tattooRequest";

//
import { FlashAside } from "./FlashAside";
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
  return (
    <div>
      <Form>
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
            onChange={(e) => {
              const value =
                "value" in e.currentTarget ? e.currentTarget.value : "";

              if (value === "flash") {
                window.location.href = "/flash";
              }
              if (value === "custom") setShowFormBody(true);
            }}
          />
        )}

        {(flashId && flashName) ||
          (showFormBody &&
            TATT_REQ_BODY.map(
              (req) =>
                req && (
                  <Input
                    id={req.id}
                    label={req.label}
                    required={req.required ?? false}
                    key={req.id}
                    type={INPUT_TYPES_MAP[req.type]}
                  />
                ),
            ))}
      </Form>
    </div>
  );
}
