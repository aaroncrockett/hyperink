//
import type { ReactNode } from "react";
//
import { Nav } from "./_components/layout/Nav";
import { LayoutNavFooter } from "./_components/layout/LayoutNavFooter";
// import { LayoutSubNav } from "./_components/layout/LayoutSubNav";
// import { IntroProfileForm } from "./_components/IntroProfileForm";
//

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  // this all comes from if the user signed in via oauth and google.

  return (
    <>
      {/* catch anyone who got here, and has not signed in */}
      {/* {!user && <div>No User -- create one</div>} */}
      {/* catch all users that dont have a verified email address with an Oauth provider, and don't allow them to go further */}
      {/* {user && authMetadata && !authMetadata.isEmailVerified && (
        <p>
          Your email has not been verified yet. Please use a verified method to
          sign in.
        </p>
      )} */}
      {/* dont have a profile with me or do, and have not filled out methods for me to contact and verify them. */}
      {/* {user && (!profile || profile.to_verify === null) && (
        <IntroProfileForm userId={user.id} authMetaData={authMetadata} />
      )} */}
      {/* have a profile with me but have not been verified with me yet */}
      {/* {user && profile && !profile?.is_verified && (
        <p>I&rsquo;ll be contacting you soon! :D</p>
      )} */}
      {/* Have a profile with me, and have been verified */}
      {/* {user && profile && profile.is_verified && ( */}

      <div className="grid grid-cols-1 md:grid-cols-[minmax(auto)_1fr] lg:grid-cols-[minmax(200px,auto)_1fr]">
        <div className="hidden lg:block bg-surface-900-100">
          <Nav />
        </div>

        <div className="flex flex-col min-w-0 max-w-300 h-full min-h-0">
          {/* <LayoutSubNav
        //       layoutCls="flex flex-col md:gap-4"
        //       widthCls="w-full"
        //       paddingCls="px-2 pt-1 lg:pt-4 md:pt-3 lg:px-4 md:px-3"
        //       marginCls="mx-auto"
        //     /> */}

          <main className="flex-1 bg-surface-100-900 h-full">{children}</main>

          <footer className="lg:hidden bottom-0 sticky mx-auto w-full h-auto shrink-0">
            <LayoutNavFooter className="lg:hidden flex gap-4 bg-surface-800-200 p-4 w-full h-full" />
          </footer>
        </div>
      </div>
      {/* )} */}
    </>
  );
}
