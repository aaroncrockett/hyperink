import { Input } from "@/ui/Input";
import Image from "next/image";
type ItemProps = {
  publicUrl: string;
  readable_name: string;
};
export function FlashItemEdit({ publicUrl, readable_name }: ItemProps) {
  return (
    <div className="flex flex-col gap-2 md:gap-4 justify-around p-2 sm:p-4 bg-surface-200-800/40 rounded-xl">
      <Image
        src={publicUrl}
        alt={`${readable_name} - flash image`}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto  shadow"
      />
      <Input defaultValue={readable_name} />
    </div>
  );
}
