import Image from "next/image";

type TattooItemProps = {
  title: string;
  public_url: string;
};

export function TattooItemImage({ title, public_url }: TattooItemProps) {
  return (
    <div className="flex flex-col gap-2 md:gap-4 justify-around p-2 sm:p-4 bg-surface-200-800/40 rounded">
      <Image
        src={public_url}
        alt={`${title ?? ""} - tattoo image`}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto shadow"
        loading="eager"
      />

      <p className="text-2xl  text-center font-display text-surface-800-200">
        {title}
      </p>
    </div>
  );
}
