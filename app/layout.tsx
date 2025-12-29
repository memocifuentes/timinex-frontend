import "./globals.css";

export const metadata = {
  title: "Timinex",
  description: "Timinex – Booking platform (Coming soon)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
