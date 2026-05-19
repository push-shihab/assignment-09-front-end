import Image from "next/image";
import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

const LatestRoom = ({ room }) => {
  return (
    <div className="py-7">
      <div className="card bg-base-100 shadow-sm rounded-3xl">
        <figure className="w-full h-75 overflow-hidden">
          <Image
            src={room.image}
            alt={room.name}
            width={300}
            height={300}
            className="w-full h-full object-cover"
          ></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-[#D97757]">
            {room.name}
          </h2>
          <p className="text-[#858585] font-bold">{room.description}</p>
          <span className="font-bold text-xl text-[#5227FF]">
            {room.capacity}
          </span>
          <div className="flex items-center gap-2">
            {room.amenities.map((amenity, i) => (
              <span
                className="text-[#D97757] py-1.5 px-3 border border-[#D97757] rounded-3xl font-semibold text-[12px]"
                key={i}
              >
                {amenity}
              </span>
            ))}
          </div>
          <div className="border-t border-neutral opacity-20 my-3"></div>
          <div className="card-actions flex justify-between items-center">
            <p>
              <span className="text-[#D97757] text-3xl font-bold">
                ${room.hourlyRate[(0, 1)]}
              </span>
              <span className="text-[#858585]"> / hr</span>
            </p>
            <PrimaryButton name={"View Details"} link={"/"}></PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestRoom;
