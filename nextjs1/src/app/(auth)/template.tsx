"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [inpout, setInput] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="m-1 p-1 "
        value={inpout}
        onChange={(e) => setInput(e.target.value)}
      />
      <nav className="flex max-w-sm justify-evenly">
        {navLinks.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              href={item.href}
              key={item.href}
              className={`bg-slate-400 p-1 rounded-sm hover:opacity-80 ${
                isActive ? "bg-blue-400 text-white" : ""
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
      {children}
    </div>
  );
}
