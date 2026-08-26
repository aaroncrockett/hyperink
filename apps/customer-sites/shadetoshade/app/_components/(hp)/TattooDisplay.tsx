import Image from "next/image";
import Link from "next/link";

export function TattooDisplay() {
  return (
    <>
      <div className="relative w-full h-full aspect-square drop-shadow-sm">
        <Link href="/tattoos">
          <Image
            src="/images/hp/ff-mage-sq.webp"
            alt="Final Fantasy Pixel Mage"
            fill
            className="object-cover shadow-sm"
          />
        </Link>
      </div>

      <div className="relative w-full h-full aspect-square drop-shadow-sm">
        <Link href="/tattoos">
          <Image
            src="/images/hp/v-gogh.webp"
            alt="Van Gogh Skull Smoking"
            fill
            className="object-cover shadow-sm"
          />
        </Link>
      </div>

      <div className="relative w-full h-full aspect-square drop-shadow-sm">
        <Link href="/tattoos">
          <Image
            src="/images/hp/bolt.webp"
            alt="Delicate Lightening Bolt"
            fill
            className="object-cover shadow-sm"
          />
        </Link>
      </div>

      <div className="relative w-full h-full aspect-square drop-shadow-sm">
        <Link href="/tattoos">
          <Image
            src="/images/hp/squid.webp"
            alt="Cool Squid Design"
            fill
            className="object-cover shadow-sm"
          />
        </Link>
      </div>
    </>
  );
}
