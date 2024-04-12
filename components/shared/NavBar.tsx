"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/logo.svg";
import Logout from "@/public/assets/logout.svg";
import { dark } from "@clerk/themes";
import {
  OrganizationSwitcher,
  SignedIn,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";

function NavBar() {
  return (
    <nav className="topbar">
      <Link href="/" className="gap-4 items-center flex">
        <Image src={Logo} alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">
          CanvaTech
        </p>
      </Link>
      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image src={Logout} alt="logout" width={24} height={24} />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organisationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
}
export default NavBar;
