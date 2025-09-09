"use client";
import { cn } from "@/lib/utils";
import { log } from "console";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItem = () => {
  const pathName = usePathname();
  const navItem = [
    { label: "Home", href: "/" },
    { label: "Companions", href: "/companions" },
    { label: "My Journey", href: "/my-journey" },
  ];
  return (
    <nav className="flex items-center gap-4">
      {navItem.map(({ label, href }) => (
        <Link
          href={href}
          key={label}
          className={cn(pathName === href && "font-bold text-primary")}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItem;
