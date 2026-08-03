import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/images/hyperink-logo-lt-text.svg"
        alt="Aaron Does Ink - Logo"
        width={201}
        height={40}
        className="h-16 w-auto mx-auto"
      />
    </div>
  );
}
