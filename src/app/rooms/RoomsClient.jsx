"use client";
import { useState } from "react";
import { StyledWrapper } from "./style";
import LatestRoom from "@/components/LatestRooms/LatestRoom";

export const metadata = {
  title: {
    absolute: "Study-Nook | All Rooms",
  },
};

const amenities = [
  "All Rooms",
  "Whiteboard",
  "Air Conditioning",
  "Quiet Zone",
  "Power Outlets",
  "Wi-Fi",
  "Projector",
];

const RoomsClient = ({ allRooms }) => {
  const [activeFilter, setActiveFilter] = useState("All Rooms");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRooms = allRooms.filter((room) => {
    const matchesAmenity =
      activeFilter === "All Rooms" || room.amenities?.includes(activeFilter);

    const matchesSearch = room.name
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesAmenity && matchesSearch;
  });

  return (
    <main className="bg-[#d9785725]">
      <div className="container mx-auto space-y-7 px-5">
        <section className="pt-8">
          <h1 className="text-3xl font-bold">Available Study Rooms</h1>
          <p className="text-[#858585]">
            Browse all listed study rooms and find your perfect space
          </p>
        </section>

        <section className="flex justify-between items-center flex-wrap">
          <div className="pb-10 xl:pb-0">
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </StyledWrapper>
          </div>

          <div className="flex gap-2 flex-wrap">
            {amenities.map((amenity, i) => (
              <button
                key={i}
                onClick={() => setActiveFilter(amenity)}
                className={`border rounded-box text-[14px] py-2 px-4 cursor-pointer transition-colors
                  ${
                    activeFilter === amenity
                      ? "bg-[#D97757] text-white border-[#D97757]"
                      : "border-[#D97757] text-inherit hover:bg-[#D97757]/10"
                  }`}
              >
                {amenity}
              </button>
            ))}
          </div>
        </section>

        <section className="pb-10">
          {filteredRooms.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
              {filteredRooms.map((room) => (
                <LatestRoom key={room._id} room={room} />
              ))}
            </div>
          ) : (
            <p className="text-center text-[#858585] py-16">
              No rooms found for <strong>{activeFilter}</strong>.
            </p>
          )}
        </section>
      </div>
    </main>
  );
};

export default RoomsClient;
