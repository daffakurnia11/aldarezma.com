import "@/styles/globals.css";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        {children}
        <Link
          href={"https://wa.me/62895411181899"}
          target="_blank"
          className="z-50 fixed bottom-6 right-6 bg-white p-3 rounded-full shadow-lg shadow-primary-400 hover:bg-secondary-100 transition-all duration-300 cursor-pointer"
        >
          <BsWhatsapp size={40} className="text-[#128c7e] translate-x-[1px]" />
        </Link>
      </body>
    </html>
  );
}
