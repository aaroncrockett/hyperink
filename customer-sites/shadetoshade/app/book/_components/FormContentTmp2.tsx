"use client";

// React
import { useActionState, useState, useRef } from "react";
// Next
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
// hyperink
import { Form, FormMetaErrors } from "@hyperinkstudio/ui-react/components";
import { cn }from "@hyperinkstudio/utils"
//Local @
import { TATT_REQ_ENTRY_FORM_LIST } from "@/db/tattooRequest";
import { INTERNAL_LINKS } from "@/constants";
//Local
import { RenderField } from "./RenderField";
import {
  createTattooRequestAction,
  type TattRequestFormState,
} from "../actions";

export type TattooFormState =
  | {
      type: null;
      flashId: null;
      disabled: true;
    }
  | {
      type: "pre-flash";
      flashId: null;
      disabled: true;
    }
  | {
      type: "flash";
      flashId: string;
      disabled: false;
    }
  | {
      type: "custom";
      flashId: null;
      disabled: false;
    };

const initialState: TattRequestFormState = {
  errors: null,
  tattooRequest: null,
};

type FormContentProps = {
  className: string;
};

export function FormContentTmp2({className}: FormContentProps) {
  const [state, formAction] = useActionState(
    createTattooRequestAction,
    initialState,
  );

  const searchParams = useSearchParams();

  const [formState, setFormState] = useState<TattooFormState>(() => {
    const flashId = searchParams.get("flashId");

    if (flashId) {
      return {
        type: "flash",
        flashId,
        disabled: false,
      };
    }

    return {
      type: null,
      flashId: null,
      disabled: true,
    };
  });

  const formRef = useRef<HTMLFormElement>(null);

  const router = useRouter();

  const handleFlashLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const params = new URLSearchParams();

    new FormData(formRef.current!).forEach((value, key) => {
      if (!key.startsWith("$ACTION_")) {
        params.append(key, String(value));
      }
    });

    params.set("type", "flash");

    router.push(`${INTERNAL_LINKS.flash.href}?${params.toString()}`);
  };
  return (
    <Form
      ref={formRef}
      className=""
      action={formAction}
      submitBtnCls="btn lg:w-2/3 lg:ml-[140px]"
      submitDisabled={formState.disabled}
    >
      {TATT_REQ_ENTRY_FORM_LIST.map((field, id) => {
        return RenderField({
          field,
          errors: state.errors,
          formState,
          setFormState,
          key: id.toString(),
        });
      })}
      {formState.type === "pre-flash" && (
        <div className="p-4 bg-surface-50-950/40 rounded-sm text-surface-950-50 shadow flex justify-center flex-col gap-4">
          <p className="text-xl text-center ">
            Select your{" "}
            <Link
              href={INTERNAL_LINKS.flash.href}
              onClick={handleFlashLink}
              className="text-tertiary-500"
            >
              {INTERNAL_LINKS.flash.name}
            </Link>
            before continuing. We will save your info for when you checkout.
          </p>
          <Link
            href={INTERNAL_LINKS.flash.href}
            onClick={handleFlashLink}
            className="w-1/2 lg:w-1/3 mx-auto btn preset-filled-secondary-400-600"
          >
            Browse Flash
          </Link>
        </div>
      )}

      {formState.type === "flash" && <p>Show form frields related to flash</p>}
      {formState.type === "custom" && <p>show form fields related to custom</p>}

      {formState.disabled === false && <p>show remaining form fields</p>}

      {state.errors &&
        Object.entries(state.errors).map(([key, error]) => (
          <FormMetaErrors key={key} errors={{ [key]: error }} />
        ))}
    </Form>
  );
}
