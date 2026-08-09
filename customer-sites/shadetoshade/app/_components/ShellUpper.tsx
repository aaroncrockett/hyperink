import HeaderWrapper from "../_components/(header)/HeaderWrapper";
import Nav from "../_components/(nav)/Nav";

export function ShellUpper() {
  return (
    <>
      {/* hidden: default - shown:lg*/}
      <div className="h-full row-span-3 bg-surface-800-200 text-primary-500 hidden p-1 pt-2 md:p-2 md:pt-3 lg:block">
        <Nav className="hidden lg:block" />
      </div>

      <HeaderWrapper />
    </>
  );
}
