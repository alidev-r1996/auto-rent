import ReactQueryProvider from "@/provider/react-query";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
