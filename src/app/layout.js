import "./globals.css";

export const metadata = {
  title: "Applecounter 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
