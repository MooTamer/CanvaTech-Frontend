import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/shared/NavBar";
export const metadata = {
  title: "CanvaTech",
  description: "Created by Next.js",
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <ClerkProvider>
      <html lang="en">
        <NavBar />
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    // </ClerkProvider>
  );
}
