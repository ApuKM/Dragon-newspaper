import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: [ "400", "500", "600", "700"],
});

export const monserrat = Montserrat({
  variable: "--font-monserrat",
  subsets: ["latin"],
  weight: [ "400", "500", "600", "700"],
});

export const metadata = {
  title: "Dragon News",
  description: "Best newspaper in the world",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={` h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${poppins.className}`}>{children}</body>
    </html>
  );
}
