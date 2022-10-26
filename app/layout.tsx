import "./global.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark">
      <head></head>
      <body className="bg-slate-1 text-slate-12">{children}</body>
    </html>
  );
}
