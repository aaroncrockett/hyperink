import { cn } from "@hyperink/utils/";

type FormErrorProps = {
  error: string | null | undefined;
  errorCls?: string;
  textColorCls?: string;
};

export function ErrorDisplay({
  error,
  errorCls,
  textColorCls = "text-error-500",
}: FormErrorProps) {
  if (!error) return null;

  return <p className={cn(errorCls, textColorCls)}>{error}</p>;
}
