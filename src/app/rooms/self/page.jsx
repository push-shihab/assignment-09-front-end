import PrimaryButton from "@/components/Buttons/PrimaryButton";
import LatestRoom from "@/components/LatestRooms/LatestRoom";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const MyRooms = async () => {
  const { session } = await auth.api.getSession({
    headers: await headers(),
  });
  const data = await fetch(
    `${process.env.FETCHURL}/rooms/self/${session.userId}`,
  );
  const res = await data.json();
  return (
    <main>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1>My Rooms</h1>
            <p>Manage your study rooms listed on StudyNook</p>
          </div>
          <div>
            <PrimaryButton
              name={"+ Add New Room"}
              link={"/rooms/new"}
            ></PrimaryButton>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {res.map((room) => (
            <LatestRoom key={room._id} room={room}></LatestRoom>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MyRooms;
