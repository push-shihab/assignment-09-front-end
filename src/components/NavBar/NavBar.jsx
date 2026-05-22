import SeconderyButton from "../Buttons/SeconderyButton";
import PrimaryButton from "../Buttons/PrimaryButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import NavLinks from "./NavLinks";
import Profile from "./Profile";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const NavBar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const revalidatePathForLogout = async () => {
    "use server";
    await revalidatePath("/login");
  };

  return (
    <nav className="bg-[#5227FF] sticky top-0 z-50">
      <div className="navbar container mx-auto text-white px-3 sm:px-4 md:px-6 min-h-14 sm:min-h-16">
        <div className="navbar-start gap-1 sm:gap-2">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm sm:btn-md lg:hidden p-1 sm:p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu text-white menu-sm dropdown-content bg-[#1a1a1a] rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <NavLinks session={session} />
            </ul>
          </div>

          <Link href={"/"} className="flex flex-col">
            <span className="text-xl sm:text-2xl md:text-3xl cursor-pointer font-extrabold leading-tight">
              Study<span className="text-[#D97757]">Nook</span>
            </span>
            <span className="text-[9px] sm:text-[10px] text-[#D97757] leading-none">
              Find. Book. Study
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-3 xl:gap-4 justify-center items-center text-[14px] xl:text-[16px] bg-[#1A1A1A] px-2 py-1.5 rounded-4xl border border-white/10 hover:border-[#D97757]/50 transition-all duration-300 shadow-lg group">
            <NavLinks session={session} />
          </ul>
        </div>

        <div className="navbar-end gap-1 sm:gap-2 md:gap-2.5">
          {session ? (
            <Profile
              revalidatePathForLogout={revalidatePathForLogout}
              session={session}
            />
          ) : (
            <div className="flex items-center gap-1 sm:gap-2 scale-70 sm:scale-100">
              <SeconderyButton name={"Login"} link={"/login"} />
              <PrimaryButton name={"Register"} link={"/register"} />
            </div>
          )}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
