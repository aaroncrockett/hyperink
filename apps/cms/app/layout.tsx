import "./globals.css";
import { outfit, leagueGothic, rubik, rubikDirt } from "./_data";
export { metadata } from "./_data";
import { getAuthedUser, createSSClient } from "@/auth/server";
import { Body } from "./_components/(body)/Body";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serverClient = await createSSClient();
  const {
    data: { user },
  } = await getAuthedUser(serverClient);

  const isSignedIn = !!user?.id;
  return (
    <html
      lang="en"
      data-theme="hyperinknue"
      className={`h-full antialiased ${outfit.variable} ${leagueGothic.variable} ${rubik.variable} ${rubikDirt.variable}`}
    >
      <Body className="h-full" isSignedIn={isSignedIn}>
        {children}
      </Body>
    </html>
  );
}
