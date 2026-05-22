"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

const Profile = ({ session, revalidatePathForLogout }) => {
  const handleLogout = async () => {
    await authClient.signOut();
    await revalidatePathForLogout();
    redirect("/login");
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleOpen}
        className="flex items-center gap-2 md:gap-3 px-2 py-2 md:px-4 rounded-full bg-[#1a1a1a] border border-white/10 hover:border-[#D97757]/50 transition-all duration-300 shadow-lg group cursor-pointer"
      >
        <div className="w-8 h-8 rounded-full overflow-hidden shadow-md shadow-[#D97757]/30 shrink-0 relative">
          <Image
            src={session.user.image}
            alt={session.user.name}
            fill
            className="object-cover"
          />
        </div>
        <span className="hidden sm:inline text-white font-medium text-sm tracking-wide">
          {session.user.name}
        </span>
        <svg
          className={`hidden sm:block w-4 h-4 text-white/50 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`z-40 absolute right-0 sm:left-0 mt-3 w-64 md:w-72 rounded-2xl bg-[#1a1a1a] border border-white/10 shadow-2xl shadow-black/60 overflow-hidden transition-all duration-300 origin-top ${
          open
            ? "opacity-100 scale-y-100 translate-y-0"
            : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-5 py-4 border-b border-white/10">
          <p className="text-white font-semibold text-base tracking-wide">
            {session.user.name}
          </p>
          <p className="text-white/40 text-sm mt-0.5">{session.user.email}</p>
        </div>

        <div className="py-2">
          <Link href={"/rooms/self"} className="cursor-pointer">
            <button className="w-full flex items-center gap-3 px-5 py-3 md:py-3.5 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200 group cursor-pointer">
              <span className="text-lg">📋</span>
              <span className="text-sm font-medium tracking-wide">
                My Rooms
              </span>
              <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#D97757] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </button>
          </Link>
          <Link href={"/rooms/bookings"} className="cursor-pointer">
            <button className="w-full flex items-center gap-3 px-5 py-3 md:py-3.5 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200 group cursor-pointer">
              <span className="text-lg">📅</span>
              <span className="text-sm font-medium tracking-wide">
                My Bookings
              </span>
              <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#D97757] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </button>
          </Link>
        </div>

        <div className="border-t border-white/10 py-2">
          <button
            className="w-full flex items-center gap-3 px-5 py-3 md:py-3.5 text-[#5227FF] hover:text-white hover:bg-[#5227FF]/20 transition-all duration-200 group cursor-pointer"
            onClick={handleLogout}
          >
            <span className="text-lg">💣</span>
            <span className="text-sm font-semibold tracking-wide">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
