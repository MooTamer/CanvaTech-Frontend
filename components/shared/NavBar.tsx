"use client";
import {
  ArrowLeft,
  AlignJustify,
  Layers2,
  Home,
  LogIn,
  CirclePlay,
  ArrowRight,
  ShoppingBag,
  ShoppingCart,
  Search,
  UserRound,
  Heart,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Fragment } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useSpring } from "react-spring";

interface ButtonComponentProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavBar: React.FC<ButtonComponentProps> = ({ setIsOpen }) => {
  const [cartTotal, setCartTotal] = useState(0);
  const [shake, setShake] = useState(false);
  const isLoggedIn = localStorage.getItem("token") ? true : false;

  const shakeAnimation = useSpring({
    transform: shake
      ? "translate3d(0, 0, 0) scale(1.1)"
      : "translate3d(0, 0, 0) scale(1)",
    config: { tension: 200, friction: 10 },
    onRest: () => setShake(false),
  });

  const handleAddToCart = () => {
    setCartTotal((prevTotal) => prevTotal + 1);
    setShake(true);
  };

  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    console.log(document.cookie)
    return () => observer.disconnect();
  }, []);

  const classNames = (...classes: string[]): string =>
    classes.filter(Boolean).join(" ");
  return (
    <header ref={ref}>
      <div
        className={`fixed  inset-x-0 top-0 z-[100] backdrop-blur  smooth border-[0.05px]  ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500  border-zinc-800 "
        }`}
      >
        <div className="container grid grid-cols-3 items-center  p-6 mx-auto">
          <div className="flex items-center justify-center">
            <Link legacyBehavior href="/">
              <a className="smooth text-neutral-500 hover:text-neutral-300">
                <ArrowLeft className="w-6 h-6 " />
              </a>
            </Link>
          </div>

          <div className="flex flex-row justify-center pointer-events-auto items-center gap-8">
            <Link legacyBehavior href="/">
              <div className="flex-row hover:cursor-pointer flex">
                <Layers2 color="#52525B" strokeWidth={1.25} />
                <a className="smooth hover:cursor-pointer ml-1 text-zinc-500 hover:text-neutral-300">
                  Pallet pro
                </a>
              </div>
            </Link>
          </div>

          <div className="flex flex-row justify-center items-center gap-8">
            <Link legacyBehavior href="/cart">
              <a className="smooth xl:flex hidden text-neutral-500 hover:text-neutral-300">
                Cart
              </a>
            </Link>
            {isLoggedIn ? <>
              <Link legacyBehavior href="/fav">
                <a className="smooth xl:flex hidden text-neutral-500 hover:text-neutral-300">
                  <Heart />
                </a>
              </Link>
              <Link legacyBehavior href="/wishlist">
                <a className="smooth xl:flex hidden text-neutral-500 hover:text-neutral-300">
                  Wishlist
                </a>
              </Link>
              <Link legacyBehavior href="/userprofile">
                <a className="smooth xl:flex hidden text-neutral-500 hover:text-neutral-300">
                  <UserRound />
                </a>
              </Link>
              <Link legacyBehavior href="/login">
                <a className="smooth xl:flex hidden text-neutral-500 hover:text-neutral-300">
                  Log Out
                </a>
              </Link>
            </> : <>
              <Link legacyBehavior href="/login">
              <a className="smooth xl:flex hidden text-blue-500 hover:text-blue-300">
  Log In
</a>

              </Link>
              <Link legacyBehavior href="/register">
                <a className="smooth xl:flex hidden text-neutral-500 hover:text-neutral-300">
                  Sign Up
                </a>
              </Link>
            </>}
                        

            {/* <Link legacyBehavior href="/about">
              <a className="smooth hidden lg:flex text-zinc-200 hover:text-neutral-300 rounded-full bg-blue-600 p-2 flex">
                Start a New Design!
              </a>
            </Link> */}

            <Menu
              as="div"
              className="relative inline-block text-left   lg:hidden"
            >
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-neutral-200">
                  <div>
                    <AlignJustify strokeWidth={1} />
                  </div>
                </MenuButton>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-3xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="">
                    <MenuItem>
                      <a
                        href="/"
                        className="flex flex-row gap-3 items-center hover:bg-neutral-100 rounded-xl  px-4 py-3 smooth text-sm block px-4 py-2 text-sm"
                      >
                        <Home strokeWidth={1.5} size={20} />
                        Home
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="flex flex-row gap-3 items-center hover:bg-neutral-100 rounded-xl  px-4 py-3 smooth text-sm block px-4 py-2 text-sm"
                      >
                        <ShoppingCart size={20} strokeWidth={1.5} />
                        Cart
                      </a>
                    </MenuItem>
                  </div>
                  <div>
                    { isLoggedIn ?
                    <>
                    <MenuItem>
                      <a
                        href="/customPallete"
                        className="flex flex-row gap-3 items-center hover:bg-neutral-100 rounded-xl  px-4 py-3 smooth text-sm block px-4 py-2 text-sm"
                      >
                        <CirclePlay size={20} strokeWidth={1.5} />
                        Start a new design!
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="/fav"
                        className="flex flex-row gap-3 items-center hover:bg-neutral-100 rounded-xl  px-4 py-3 smooth text-sm block px-4 py-2 text-sm"
                      >
                        <Heart size={20} strokeWidth={1.5} />
                        Favourites
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="/wishlist"
                        className="flex flex-row gap-3 items-center hover:bg-neutral-100 rounded-xl  px-4 py-3 smooth text-sm block px-4 py-2 text-sm"
                      >
                        <Heart size={20} strokeWidth={1.5} />
                        Wishlist
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="/userProfile"
                        className="flex flex-row gap-3 items-center hover:bg-neutral-100 rounded-xl  px-4 py-3 smooth text-sm block px-4 py-2 text-sm"
                      >
                        <LogIn size={20} strokeWidth={1.5} />
                        Profile
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="/login"
                        className="flex flex-row gap-3 items-center text-red-600 hover:bg-neutral-100 rounded-xl  px-4 py-4 smooth text-sm block px-4 py-2 text-sm"
                      >
                        <LogIn size={20} strokeWidth={1.5} />
                        Log Out
                      </a>
                    </MenuItem></> :
                    <>
                    <MenuItem>
                      <a
                        href="/register"
                        className="flex flex-row gap-3 items-center hover:bg-neutral-100 rounded-xl  px-4 py-4 smooth text-sm block px-4 py-2 text-sm"
                      >
                        <LogIn size={20} strokeWidth={1.5} />
                        Sign Up
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="/login"
                        className="flex flex-row gap-3 items-center hover:bg-neutral-100 rounded-xl  px-4 py-4 smooth text-sm block px-4 py-2 text-sm"
                      >
                        <LogIn size={20} strokeWidth={1.5} />
                        Sign In
                      </a>
                    </MenuItem>
                    </>
                    }
                  </div>
                </MenuItems>
              </Transition>
            </Menu>
          </div>
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
//           Pallet pro
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
