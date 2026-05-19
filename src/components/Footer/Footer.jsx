import React from "react";

const Footer = () => {
  return (
    <main className="bg-[#0f172a]">
      <div className="container mx-auto px-3">
        <div className="grid md:grid-cols-3 py-10 gap-15 md:place-items-center border-b border-gray-700">
          <div className="space-y-3">
            <a className="font-extrabold text-4xl cursor-pointer">
              <span className="text-[#5227FF]">Study</span>
              <span className="text-white">Nook</span>
            </a>
            <p className="text-[#858585] py-5">
              The modern platform for booking and listing
              <br /> study rooms. Quiet spaces, flexible booking,
              <br /> instant confirmation.
            </p>
            <div className="flex gap-2">
              <a className="p-1.5 rounded-box bg-base-100 cursor-pointer hover:bg-[#38bdf8]">
                {/* <RiFacebookFill /> */}
              </a>
              <a className="p-1.5 rounded-box bg-base-100 cursor-pointer hover:bg-[#38bdf8]">
                {/* <RiInstagramFill /> */}
              </a>
              <a className="p-1.5 rounded-box bg-base-100 cursor-pointer hover:bg-[#38bdf8]">
                {/* <RiLinkedinFill /> */}
              </a>
            </div>
          </div>
          <div>
            <span className="text-xl font-bold text-white">Quick Links</span>
            <ul className="text-[#858585] space-y-1.5 pt-3 font-semibold">
              <li>
                <a className="cursor-pointer hover:text-[#5227FF]">Home</a>
              </li>
              <li>
                <a className="cursor-pointer hover:text-[#5227FF]">All Rooms</a>
              </li>
              <li>
                <a className="cursor-pointer hover:text-[#5227FF]">About Us</a>
              </li>
            </ul>
          </div>
          <div>
            <span className="text-xl font-bold text-white">Contact</span>
            <ul className="text-[#858585] space-y-1.5 pt-3">
              <li>
                <a>support@studynook.com</a>
              </li>
              <li>
                <a>+1 (800) 786-2278</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center py-4">
          <span className="text-[#858585]">
            © 2025 StudyNook. All rights reserved.{" "}
          </span>
          <a className="text-[#D97757] cursor-pointer">Privacy Policy</a>
        </div>
      </div>
    </main>
  );
};

export default Footer;
