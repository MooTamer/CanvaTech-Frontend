"use client";
import { ArrowLeft, Layers2 } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const NavBar: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-[0.05px]  ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500  border-zinc-800 "
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-around p-6 mx-auto">
          <div className="flex justify-between items-center gap-8">
            <Link legacyBehavior href="/">
              <a className="duration-200 text-zinc-400 hover:text-zinc-200">
                Home
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="duration-200 text-zinc-400 hover:text-zinc-200">
                Contact
              </a>
            </Link>

            <Link legacyBehavior href="/about">
              <a className="duration-200 text-zinc-200 hover:text-zinc-200 rounded-full bg-blue-600 p-2 flex">
                Start a New Design!
              </a>
            </Link>
          </div>

          <div className="flex justify-between items-center gap-8">
            <Link legacyBehavior href="/c">
              <div className="flex-row hover:click flex">
                <Layers2 color="#52525B" strokeWidth={1.25} />
                <a className="duration-200 ml-1 text-zinc-500 hover:text-zinc-200">
                  CanvaTech
                </a>
              </div>
            </Link>
          </div>

          <Link legacyBehavior href="/sign-in">
            <a className="duration-200 text-zinc-400 hover:text-zinc-200">
              Sign In
            </a>
          </Link>

          <Link legacyBehavior href="/">
            <a className="duration-200 text-zinc-400 hover:text-zinc-200">
              <ArrowLeft className="w-6 h-6 " />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

// "use client";

// import { sidebarLinks } from "@/constants";
// import Image from "next/image";
// import Link from "next/link";
// import Logo from "@/public/assets/logo.svg";
// import Logout from "@/public/assets/logout.svg";
// import { dark } from "@clerk/themes";
// import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
// import { usePathname, useRouter } from "next/navigation";

// function NavBar() {
//   const pathname = usePathname();
//   const router = useRouter();
//   return (
//     <nav className="topbar bg-transparent backdrop-blur-3xl">
//       <Link href="/" className="gap-4 items-center flex">
//         <Image src={Logo} alt="logo" width={28} height={28} />
//         <p className="text-heading3-bold text-light-1 max-xs:hidden">
//           CanvaTech
//         </p>
//       </Link>
//       <div className="flex w-full flex-1 gap-6 px-6">
//         {sidebarLinks.map((link) => {
//           const isActive = pathname.includes(link.route) && link.route === "/";
//           return (
//             <Link
//               id="active"
//               href={link.route}
//               key={link.label}
//               className={`leftsidebar_link ${isActive && "bg-primary-500"}`}
//             >
//               <Image
//                 src={link.imgURL}
//                 alt={link.label}
//                 width={24}
//                 height={24}
//               />
//               <p className="text-light-1 max-lg:hidden">{link.label}</p>
//             </Link>
//           );
//         })}
//       </div>
//       <div className="flex items-center gap-1">
//         <div className="block md:hidden">
//           <SignedIn>
//             <SignOutButton>
//               <div className="flex cursor-pointer">
//                 <Image src={Logout} alt="logout" width={24} height={24} />
//               </div>
//             </SignOutButton>
//           </SignedIn>
//         </div>
//         <OrganizationSwitcher
//           appearance={{
//             baseTheme: dark,
//             elements: {
//               organisationSwitcherTrigger: "py-2 px-4",
//             },
//           }}
//         />
//       </div>
//     </nav>
//   );
// }
// export default NavBar;

// "use client";
// import React from "react";
// import { FloatingNav } from "@/components/ui/floating-navbar";
// import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
// export default function FloatingNavDemo() {
//   const navItems = [
//     {
//       name: "Home",
//       link: "/",
//       icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
//     },
//     {
//       name: "About",
//       link: "/about",
//       icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
//     },
//     {
//       name: "Contact",
//       link: "/contact",
//       icon: (
//         <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
//       ),
//     },
//   ];
//   return (
//     <div className="relative  w-full">
//       <FloatingNav navItems={navItems} />
//       {/* <DummyContent /> */}
//     </div>
//   );
// }
// const DummyContent = () => {
//   return (
//     <div className="grid grid-cols-1 h-[40rem] w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md">
//       <p className="dark:text-white text-neutral-600 text-center text-4xl mt-40 font-bold">
//         Scroll back up to reveal Navbar
//       </p>
//       <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
//     </div>
//   );
// };
