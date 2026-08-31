import { ComboBox } from "@hyperinkstudio/ui-react-next/components";

type LabelPair = {
  label: string;
  value: string;
};

type ComboBoxProps = {
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

export function ComboBoxComponent({
  boxLabel,
  contentWrapperCls,
  cls,
  data,
  defaultValue,
  inputBgColorCls,
  inputBorderCls,
  inputCls,
  inputRoundedCls,
  itemCls,
  labelCls,
  widthCls,
  onValueChangeCb,
}: ComboBoxProps) {
  return (
    <ComboBox
      boxLabel={boxLabel}
      contentWrapperCls={contentWrapperCls}
      cls={cls}
      data={data}
      defaultValue={defaultValue}
      inputBgColorCls={inputBgColorCls}
      inputBorderCls={inputBorderCls}
      inputCls={inputCls}
      inputRoundedCls={inputRoundedCls}
      itemCls={itemCls}
      labelCls={labelCls}
      widthCls={widthCls}
      onValueChangeCb={onValueChangeCb}
    />
  );
}
