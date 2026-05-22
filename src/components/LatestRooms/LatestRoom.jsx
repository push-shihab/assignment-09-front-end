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
            priority
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-120"
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
          <div className="flex flex-wrap items-center gap-2">
            {room.amenities.slice(0, 4).map((amenity, i) => (
              <div key={i}>
                <span className="text-[#D97757] py-1.5 px-3 border border-[#D97757] rounded-3xl font-semibold text-[12px]">
                  {amenity}
                </span>
              </div>
            ))}
          </div>
          <div className="border-t border-neutral opacity-20 my-3"></div>
          <div className="card-actions flex justify-between items-center">
            <p>
              <span className="text-[#D97757] text-3xl font-bold">
                ${room.hourlyRate}
              </span>
              <span className="text-[#858585]"> / hr</span>
            </p>
            <PrimaryButton
              name={"View Details"}
              link={`/rooms/${room._id}`}
            ></PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestRoom;
