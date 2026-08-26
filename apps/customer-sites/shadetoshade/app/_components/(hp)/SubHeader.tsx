import Image from "next/image";
import Link from "next/link";

export function SubHeader() {
  return (
    <>
      <div className="hidden w-full sm:block">
        <Link href="/flash" className=" drop-shadow-sm">
          <Image
            src="/images/hp/flash-designs.webp"
            alt="Aaron Does Flash! Bro!"
            width={1010}
            height={500}
            priority
          />
        </Link>
      </div>
      <div className="block w-full sm:hidden">
        <Link href="/flash" className="drop-shadow-sm">
          <Image
            src="/images/hp/flash-designs-cropped-1.webp"
            alt="Aaron Does Flash!"
            width={550}
            height={480}
            priority
            className="w-full h-auto"
          />
        </Link>
      </div>
      <div className="block w-full sm:hidden">
        <Link href="/flash" className="drop-shadow-sm">
          <Image
            src="/images/hp/flash-designs-cropped-2.webp"
            alt="Aaron Does So much flash!"
            width={550}
            height={480}
            priority
            className="w-full h-auto"
          />
        </Link>
      </div>
    </>
  );
}
