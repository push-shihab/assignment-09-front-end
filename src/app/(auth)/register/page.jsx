"use client";
import LiquidEther from "../LiquidEther";
import React from "react";
import { StyledWrapper } from "../Style";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { data: res, error } = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      image: data.image,
      callbackURL: "http://localhost:3000/",
    });
    if (res) {
      alert(`${res.user.name} your account created successfully`);
      redirect("/login");
    }
  };
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
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <p className="title">Create Account</p>
            <p className="message">Fill in your details to get started</p>
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
                or register with email
              </span>
              <div className="h-px flex-1 bg-[#D97757]"></div>
            </div>

            <label>
              <input
                className="input"
                type="text"
                required
                placeholder=" "
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters",
                  },
                })}
              />
              <span>Full Name</span>
            </label>
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}

            <label>
              <input
                className="input"
                type="email"
                required
                placeholder=" "
                {...register("email", {
                  required: "Email is required",
                  minLength: {
                    message: "Provide a valid Email",
                  },
                })}
              />
              <span>Email</span>
            </label>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <label>
              <input
                className="input"
                type="text"
                required
                placeholder=" "
                {...register("image", {
                  required: "Image URL is required",
                  minLength: {
                    message: "Provide a valid Image Link",
                  },
                })}
              />
              <span>Image URL</span>
            </label>
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}

            <label>
              <input
                className="input"
                type="password"
                required
                placeholder=" "
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  validate: {
                    hasUpperCase: (value) =>
                      /[A-Z]/.test(value) ||
                      "Must include at least one uppercase letter",
                    hasLowerCase: (value) =>
                      /[a-z]/.test(value) ||
                      "Must include at least one lowercase letter",
                  },
                })}
              />
              <span>Password</span>
            </label>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            <button className="submit" type="submit">
              Submit
            </button>

            <p className="signin">
              Already have an account? <Link href="/login">Login</Link>
            </p>
          </form>
        </StyledWrapper>
      </div>
    </main>
  );
};

export default Register;
