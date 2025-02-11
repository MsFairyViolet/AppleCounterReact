import "./globals.css";
import Head from 'next/head'

export const metadata = {
  title: "Applecounter 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
