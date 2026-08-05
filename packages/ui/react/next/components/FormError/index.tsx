import { cn } from "@hyperinkstudio/utils/";

type FormErrorProps = {
  error: string | null | undefined;
  errorCls?: string;
  textColorCls?: string;
};

export function FormError({
  error,
  errorCls,
  textColorCls = "text-red-500",
}: FormErrorProps) {
  if (!error) return null;

  return <p className={cn(errorCls, textColorCls)}>{error}</p>;
}
