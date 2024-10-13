import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Component Cloud",
  description: "Ultimate UI library for your app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');
      </style>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
