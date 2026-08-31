"use client";
import { TATT_REQ_BODY, TYPE_FIELD } from "@/business/tattooRequest";
import { INPUT_TYPES_MAP } from "@hyperinkstudio/business";
import { toLabelValue } from "@hyperinkstudio/utils";
//
import { Form, Input, Select } from "@hyperinkstudio/ui-react-next/components";
type BookingFormProps = {
  flashId?: string;
};

export function BookingForm({ flashId }: BookingFormProps) {
  return (
    <div>
      {flashId && flashId}
      <Form>
        <Select
          options={TYPE_FIELD.options.map((opt) => toLabelValue(opt))}
          id={TYPE_FIELD.id}
        />
        {TATT_REQ_BODY.map(
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
        )}
      </Form>
    </div>
  );
}
