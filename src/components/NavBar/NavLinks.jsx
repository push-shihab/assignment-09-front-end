"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ session }) => {
  const path = usePathname();
  return (
    <>
      <li
        className={`hover:text-[#D97757] rounded-4xl px-3 py-1 ${path === "/" && "border border-[#D97757] px-3 py-1 rounded-4xl"} transition-all duration-200 ease-in-out`}
      >
        <Link href={"/"}>Home</Link>
      </li>
      <li
        className={`hover:text-[#D97757] rounded-4xl px-3 py-1 ${path === "/rooms" && "border border-[#D97757] px-3 py-1 rounded-4xl"}`}
      >
        <Link href={"/rooms"}>Rooms</Link>
      </li>
      {session && (
        <>
          <li
            className={`hover:text-[#D97757] rounded-4xl px-3 py-1 ${path === "/rooms/new" && "border border-[#D97757] px-3 py-1 rounded-4xl"}`}
          >
            <Link href={"/rooms/new"}>Add Room</Link>
          </li>
          <li
            className={`hover:text-[#D97757] rounded-4xl px-3 py-1 ${path === "/rooms/self" && "border border-[#D97757] px-3 py-1 rounded-4xl"}`}
          >
            <Link href={"/rooms/self"}>My Rooms</Link>
          </li>
          <li
            className={`hover:text-[#D97757] rounded-4xl px-3 py-1 ${path === "/rooms/bookings" && "border border-[#D97757] px-3 py-1 rounded-4xl"}`}
          >
            <Link href={"/rooms/bookings"}>My Bookings</Link>
          </li>
        </>
      )}
    </>
  );
};

export default NavLinks;
