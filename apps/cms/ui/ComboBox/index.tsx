"use client";
import {
  Combobox,
  Portal,
  type ComboboxRootProps,
  useListCollection,
} from "@skeletonlabs/skeleton-react";
// React
import { useState } from "react";
// hyperink
import { cn } from "@hyperinkstudio/utils";
// Local
import { INPUT_DEFAULTS } from "../consts";

type LabelPair = {
  value: string;
  label: string;
};

type BoxProps = {
  data: LabelPair[];
  defaultValue?: string;
  boxLabel?: string;
  inputCls?: string;
  inputBgColorCls?: string;
  inputBorderCls?: string;
  inputRoundedCls?: string;
  onValueChangeCb: (value: string) => void;
};

export function ComboBox({
  data,
  defaultValue,
  boxLabel,
  inputCls,
  inputBgColorCls = INPUT_DEFAULTS.backgroundColorCls,
  inputBorderCls = INPUT_DEFAULTS.borderCls,
  inputRoundedCls = INPUT_DEFAULTS.roundedCls,
  onValueChangeCb,
}: BoxProps) {
  const [items, setItems] = useState(data);

  const collection = useListCollection({
    items,
    itemToString: (item) => item.label,
    itemToValue: (item) => item.value,
  });

  const onOpenChange = () => {
    setItems(data);
  };

  const onInputValueChange: ComboboxRootProps["onInputValueChange"] = (
    event,
  ) => {
    const filtered = data.filter((item) =>
      item.label.toLowerCase().includes(event.inputValue.toLowerCase()),
    );

    setItems(filtered.length > 0 ? filtered : data);

    onValueChangeCb(event.inputValue.toLowerCase());
  };

  return (
    <Combobox
      className="max-w-md"
      collection={collection}
      onOpenChange={onOpenChange}
      onInputValueChange={onInputValueChange}
    >
      {boxLabel && <Combobox.Label>{boxLabel}</Combobox.Label>}

      <Combobox.Control>
        <Combobox.Input
          defaultValue={defaultValue ? [defaultValue] : undefined}
          className={cn(
            inputCls,
            inputBgColorCls,
            inputBorderCls,
            inputRoundedCls,
          )}
        />
        <Combobox.Trigger />
      </Combobox.Control>

      <Combobox.ClearTrigger>Clear All</Combobox.ClearTrigger>

      <Portal>
        <Combobox.Positioner>
          <Combobox.Content>
            {items.map((item) => (
              <div key={item.value}>
                <Combobox.Item item={item}>
                  <Combobox.ItemText>{item.label}</Combobox.ItemText>
                  <Combobox.ItemIndicator />
                </Combobox.Item>
              </div>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox>
  );
}
