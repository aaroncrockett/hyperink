export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="w-full h-full mt-2 md:mt-1">{children}</main>;
}
