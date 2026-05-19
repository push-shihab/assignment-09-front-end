import LiquidEther from "../LiquidEther";
import React from "react";
import { StyledWrapper } from "../Style";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <main className="bg-black relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ width: "100%", height: 750, position: "relative" }}
      >
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B497CF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          color0="#D97757"
          color1="#5227FF"
          color2="#D97757"
        />
      </div>

      <div className="absolute inset-0 z-40 flex items-center justify-center">
        <StyledWrapper>
          <form className="form">
            <p className="title">Login</p>
            <p className="message">Enter your credentials to continue</p>
            <div className="flex justify-center py-3">
              <Link
                href={"/"}
                className="border border-[#D97757] rounded-box text-[16px] py-2.5 px-5 flex gap-2 items-center justify-center"
              >
                <FaGoogle className="text-[#D97757]" />
                Continue with Google
              </Link>
            </div>
            <div className="flex items-center gap-3 my-6">
              <div className="h-px flex-1 bg-[#D97757]"></div>
              <span className="text-[#D97757] text-sm font-medium">
                or login with email
              </span>
              <div className="h-px flex-1 bg-[#D97757]"></div>
            </div>

            <label>
              <input className="input" type="email" required placeholder=" " />
              <span>Email</span>
            </label>

            <label>
              <input
                className="input"
                type="password"
                required
                placeholder=" "
              />
              <span>Password</span>
            </label>

            <button className="submit" type="submit">
              Login
            </button>

            <p className="signin">
              Don&apos;t have an account? <Link href="/register">Register</Link>
            </p>
          </form>
        </StyledWrapper>
      </div>
    </main>
  );
};

export default Login;
