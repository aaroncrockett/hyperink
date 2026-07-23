import { cn } from "@hyperinkstudio/utils/";
type FormErrorProps = {
  error: string | null | undefined;
  errorCls?: string;
  errorTxtColor?: string;
};

export function FormError({
  error,
  errorCls = "",
  errorTxtColor = "text-red-500",
}: FormErrorProps) {
  if (!error) return null;

  return <p className={cn(errorCls, errorTxtColor)}>{error}</p>;
}
