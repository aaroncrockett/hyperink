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
import { cn } from "@hyperink/utils";

type LabelPair = {
  value: string;
  label: string;
};

type BoxProps = {
  contentWrapperClassName?: string;
  contentWrapperUtilClassName?: string;
  data: LabelPair[];
  defaultValue?: string;
  inputClassName?: string;
  inputUtilClassName?: string;
  itemClassName?: string;
  itemUtilClassName?: string;
  label?: string;
  labelClassName?: string;
  labelUtilClassName?: string;
  readOnly?: boolean;
  textClassName?: string;
  textUtilClassName?: string;
  wrapperClassName?: string;
  wrapperUtilClassName?: string;
  onValueChangeCb: (value: string) => void;
};

export function ComboBox({
  contentWrapperClassName,
  contentWrapperUtilClassName,
  data,
  defaultValue,
  inputClassName,
  inputUtilClassName,
  itemClassName,
  itemUtilClassName,
  label,
  labelClassName,
  labelUtilClassName,
  readOnly = true,
  textClassName,
  textUtilClassName,
  wrapperClassName,
  wrapperUtilClassName,
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
      className={cn(wrapperClassName, wrapperUtilClassName)}
      collection={collection}
      onOpenChange={onOpenChange}
      onInputValueChange={onInputValueChange}
      allowCustomValue={false}
      openOnClick={true}
      // readOnly={readOnly}
    >
      {label && (
        <Combobox.Label className={cn(labelClassName, labelUtilClassName)}>
          {label}
        </Combobox.Label>
      )}

      <Combobox.Control>
        <Combobox.Input
          defaultValue={defaultValue ? [defaultValue] : undefined}
          className={cn(inputClassName, inputUtilClassName)}
        />
        <Combobox.Trigger />
      </Combobox.Control>

      {/* <Combobox.ClearTrigger>Clear All</Combobox.ClearTrigger> */}

      <Portal>
        <Combobox.Positioner>
          <Combobox.Content
            className={cn(contentWrapperUtilClassName, contentWrapperClassName)}
          >
            {items.map((item, i) => (
              <div key={item.value + i.toString()}>
                <Combobox.Item
                  className={cn(itemUtilClassName, itemClassName)}
                  item={item}
                >
                  <Combobox.ItemText
                    className={cn(textClassName, textUtilClassName)}
                  >
                    {item.label}
                  </Combobox.ItemText>

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
