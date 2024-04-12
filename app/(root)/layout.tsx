import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import NavBar from "@/components/shared/NavBar";
import LeftSideBar from "@/components/shared/LeftSideBar";
import RightSideBar from "@/components/shared/RightSideBar";
import Footer from "@/components/shared/Footer";
import "../globals.css";


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
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          <main className="flex flex-row">
            <LeftSideBar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RightSideBar />
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
