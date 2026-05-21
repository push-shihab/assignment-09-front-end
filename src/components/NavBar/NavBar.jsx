import SeconderyButton from "../Buttons/SeconderyButton";
import PrimaryButton from "../Buttons/PrimaryButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import ThemeToggle from "../Theme/ThemeToggle";
import NavLinks from "./NavLinks";
import Profile from "./Profile";

const NavBar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const handleLogout = async () => {
    "use server";
    await auth.api.signOut({
      headers: await headers(),
    });
    revalidatePath("/");
  };

  return (
    <nav className="bg-[#5227FF]">
      <div className="navbar container mx-auto text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu text-white menu-sm dropdown-content bg-[#1a1a1a] rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLinks session={session}></NavLinks>
            </ul>
          </div>
          <div className="flex flex-col">
            <a className="text-3xl cursor-pointer font-extrabold">
              Study<span className="text-[#D97757]">Nook</span>
            </a>
            <span className="text-[10px] text-[#D97757]">
              Find. Book. Study
            </span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-2 justify-center items-center text-[16px]">
            <NavLinks session={session}></NavLinks>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {session ? (
            <Profile handleLogout={handleLogout} session={session}></Profile>
          ) : (
            <>
              <SeconderyButton name={"Login"} link={"/login"}></SeconderyButton>
              <PrimaryButton
                name={"Register"}
                link={"/register"}
              ></PrimaryButton>
            </>
          )}
          <ThemeToggle></ThemeToggle>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
