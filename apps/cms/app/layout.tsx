import "./globals.css";
import { outfit, leagueGothic, rubik, rubikDirt } from "./(data)/index";
export { metadata } from "./(data)/index";
import { getUserData } from "./helpers";
import { Body } from "./_components/(body)/Body";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await getUserData();

  const isSignedIn = !!userId;
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
