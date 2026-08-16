import Image from "next/image";
import Link from "next/link";

export function SubHeader() {
  return (
    <>
      <div className="w-full ">
        <Link
          href="/flash"
          className="mr-0.5 flex brand-font items-center justify-center text-xs md:text-base gap-1 text-surface-950 drop-shadow-sm"
        >
          <Image
            src="/images/hp/flash-designs.webp"
            alt="Aaron Does Flash"
            width={1010}
            height={500}
            priority
          />
        </Link>
      </div>
    </>
  );
}
