import React from "react";
import { StyledWrapper } from "./style";
import LatestRoom from "@/components/LatestRooms/LatestRoom";

const Rooms = async () => {
  const data = await fetch(`${process.env.FETCHURL}/rooms`);
  const allRooms = await data.json();
  return (
    <main className="bg-[#d9785725]">
      <div className="container mx-auto space-y-7">
        <section className="pt-8">
          <h1 className="text-3xl font-bold">Available Study Rooms</h1>
          <p className="text-[#858585]">
            Browse all listed study rooms and find your perfect space
          </p>
        </section>
        <section className="flex justify-between items-center">
          <div>
            <StyledWrapper>
              <div className="group">
                <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                  <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
                  </g>
                </svg>
                <input
                  placeholder="Search by room name..."
                  type="search"
                  className="input"
                />
              </div>
            </StyledWrapper>
          </div>
          <div className="flex gap-2">
            <button className="border border-[#D97757] rounded-box text-[14px] py-2 px-4 cursor-pointer">
              All Rooms
            </button>
            <button className="border border-[#D97757] rounded-box text-[14px] py-2 px-4 cursor-pointer">
              Whiteboard
            </button>
            <button className="border border-[#D97757] rounded-box text-[14px] py-2 px-4 cursor-pointer">
              Air Conditioning
            </button>
            <button className="border border-[#D97757] rounded-box text-[14px] py-2 px-4 cursor-pointer">
              Quiet Zone
            </button>
            <button className="border border-[#D97757] rounded-box text-[14px] py-2 px-4 cursor-pointer">
              Power Outlets
            </button>
            <button className="border border-[#D97757] rounded-box text-[14px] py-2 px-4 cursor-pointer">
              Wi-Fi
            </button>
            <button className="border border-[#D97757] rounded-box text-[14px] py-2 px-4 cursor-pointer">
              Projector
            </button>
          </div>
        </section>
        <section className="pb-10">
          <div className="grid grid-cols-3 gap-4">
            {allRooms.map((room) => (
              <LatestRoom key={room._id} room={room}></LatestRoom>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Rooms;
