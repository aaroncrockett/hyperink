import HeaderWrapper from "./(header)/HeaderWrapper";
import Nav from "./(nav)/Nav";

export function ShellUpper() {
  return (
    <>
      {/* hidden: default - shown:lg*/}
      <div className="h-full row-span-3 dark:bg-primary-500 bg-surface-800 text-primary-500 hidden p-2 pt-3 md:p-4 md:pt-5 lg:block">
        <Nav
          linkCls="hover:text-secondary-300 dark:text-surface-950"
          className="hidden lg:block"
        />
      </div>

      <HeaderWrapper />
    </>
  );
}
