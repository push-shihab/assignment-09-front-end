"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ session }) => {
  const path = usePathname();

  return (
    <>
      <li className={`hover:text-[#D97757] ${path == "/" && "text-[#D97757]"}`}>
        <Link href={"/"}>Home</Link>
      </li>
      <li
        className={`hover:text-[#D97757] ${path == "/rooms" && "text-[#D97757]"}`}
      >
        <Link href={"/rooms"}>Rooms</Link>
      </li>
      {session && (
        <>
          <li
            className={`hover:text-[#D97757] ${path == "/rooms/new" && "text-[#D97757]"}`}
          >
            <Link href={"/rooms/new"}>Add Room</Link>
          </li>
          <li
            className={`hover:text-[#D97757] ${path == "/rooms/self" && "text-[#D97757]"}`}
          >
            <Link href={"/rooms/self"}>My Rooms</Link>
          </li>
          <li
            className={`hover:text-[#D97757] ${path == "/rooms/bookings" && "text-[#D97757]"}`}
          >
            <Link href={"/rooms/bookings"}>My Bookings</Link>
          </li>
        </>
      )}
    </>
  );
};

export default NavLinks;
