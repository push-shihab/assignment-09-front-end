"use client";
import Image from "next/image";
import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { motion } from "motion/react";

const LatestRoom = ({ room }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{
        amount: 0.8,
      }}
    >
      <div className="h-135">
        <div className="card h-full bg-base-100 border border-[#D97757]/10 rounded-3xl hover:border-[#D97757]/50 shadow-sm hover:shadow-[1px_1px_20px_#D97757] group hover:scale-103 transition-all duration-300 ease-in">
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
            <p className="text-[#858585] font-bold truncate">
              {room.description}
            </p>
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
                  $ {room.rate}
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
    </motion.div>
  );
};

export default LatestRoom;
