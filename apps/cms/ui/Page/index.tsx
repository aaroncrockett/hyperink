import { ComponentPropsWithoutRef } from "react";
import { Page as PageUI } from "@hyperinkstudio/ui-react-next/components/Page";

type PageProps = ComponentPropsWithoutRef<typeof PageUI> & {
  wrapperBgColorCls?: string;
  sectional?: boolean;
};

export function Page({
  children,
  wrapperBgColorCls,
  sectional = false,
  ...props
}: PageProps) {
  const defaultBgColorCls = "";
  let computedWrapperBgColorCls = "";

  if (sectional) {
    computedWrapperBgColorCls = wrapperBgColorCls ? wrapperBgColorCls : "";
  }
  if (!sectional) {
    computedWrapperBgColorCls = wrapperBgColorCls
      ? wrapperBgColorCls
      : defaultBgColorCls;
  }

  if (!sectional) {
    return (
      <PageUI wrapperBgColorCls={computedWrapperBgColorCls} {...props}>
        {children}
      </PageUI>
    );
  }

  return (
    <PageUI
      wrapperBgColorCls={computedWrapperBgColorCls}
      sectional={true}
      {...props}
    >
      {children}
    </PageUI>
  );
}
