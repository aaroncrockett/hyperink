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

type LabelPair = {
  value: string;
  label: string;
};

type BoxProps = {
  boxLabel?: string;
  contentWrapperCls?: string;
  cls?: string;
  data: LabelPair[];
  defaultValue?: string;
  inputBgColorCls?: string;
  inputBorderCls?: string;
  inputCls?: string;
  inputRoundedCls?: string;
  itemCls?: string;
  labelCls?: string;
  widthCls?: string;
  onValueChangeCb: (value: string) => void;
};

export function ComboBox({
  boxLabel,
  cls,
  contentWrapperCls,
  data,
  defaultValue,
  inputBgColorCls,
  inputBorderCls,
  inputCls,
  inputRoundedCls,
  itemCls,
  labelCls,
  widthCls = "max-w-md",
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
      className={cn(cls, widthCls)}
      collection={collection}
      onOpenChange={onOpenChange}
      onInputValueChange={onInputValueChange}
    >
      {boxLabel && (
        <Combobox.Label className={labelCls}>{boxLabel}</Combobox.Label>
      )}

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

      {/* Save for enhancement issue #50 */}
      {/* <Combobox.ClearTrigger>Clear All</Combobox.ClearTrigger> */}

      <Portal>
        <Combobox.Positioner>
          <Combobox.Content className={contentWrapperCls}>
            {items.map((item) => (
              <div key={item.value}>
                <Combobox.Item className={itemCls} item={item}>
                  <Combobox.ItemText>{item.label}</Combobox.ItemText>
                  {/* unsure if classes are needed for this, check in issue #50 */}
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
