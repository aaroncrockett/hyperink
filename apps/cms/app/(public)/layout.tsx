export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className={`p-1 pt-2 md:p-2 md:pt-3`}>{children}</main>;
}
