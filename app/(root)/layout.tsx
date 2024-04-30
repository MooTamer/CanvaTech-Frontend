import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import NavBar from "@/components/shared/NavBar";
import LeftSideBar from "@/components/shared/LeftSideBar";
// import RightSideBar from "@/components/shared/RightSideBar";
import Footer from "@/components/shared/Footer";
import "../globals.css";
import React from "react";
// import FloatingNav from "@/components/ui/floating-navbar";

export const metadata = {
  title: "CanvaTech",
  description: "Customize your own plastic palette",
};
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          <main className="flex flex-row">
            {/* <LeftSideBar /> */}
            <section className="w-full h-full pb-16 absolute bg-dark-1">
              <div className="max-w-full pt-24 pb-16 max-h-full bg-dark-1">
                {children}
              </div>
            </section>
            {/* <RightSideBar /> */}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
