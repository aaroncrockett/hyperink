import Image from "next/image";

type FlashItemProps = {
  readable_name: string;
  public_url: string;
  id: string;
};

export function FlashItemImage({
  readable_name,
  id,
  public_url,
}: FlashItemProps) {
  return (
    <div className="flex flex-col gap-2 md:gap-4 justify-around p-2 sm:p-4 bg-surface-200-800/40 rounded">
      <Image
        src={public_url}
        alt={`${readable_name ?? ""} - flash image`}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto shadow"
        loading="eager"
      />

      <p className="text-3xl text-center font-display text-surface-800-200">
        {readable_name}
      </p>
    </div>
  );
}
