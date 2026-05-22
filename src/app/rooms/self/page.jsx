import PrimaryButton from "@/components/Buttons/PrimaryButton";
import LatestRoom from "@/components/LatestRooms/LatestRoom";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const MyRooms = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const { session } = await auth.api.getSession({
    headers: await headers(),
  });
  const fetchData = await fetch(
    `${process.env.FETCHURL}/rooms/self/${session.userId}`,
    {
      headers: {
        authorization: token,
      },
    },
  );
  const res = await fetchData.json();
  return (
    <main className="bg-[#d9785725]">
      <div className="container mx-auto py-10">
        <div className="flex justify-between items-center px-5 flex-wrap">
          <div className="space-y-3  pb-10 xl:pb-0">
            <h1 className="text-3xl font-bold">My Rooms</h1>
            <p className="text-[#858585]">
              Manage your study rooms listed on StudyNook
            </p>
          </div>
          <div>
            <PrimaryButton
              name={"+ Add New Room"}
              link={"/rooms/new"}
            ></PrimaryButton>
          </div>
        </div>
        {res.length == 0 ? (
          <div className="card bg-[#D97757]/18 shadow-xl border border-[#D97757] py-10 my-10 h-[50vh] flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-4xl font-bold text-[#5227FF]">
                No Data Found
              </h2>

              <p className="text-2xl text-gray-500">
                You have no rooms for now
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 p-5">
            {res.map((room) => (
              <LatestRoom key={room._id} room={room}></LatestRoom>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyRooms;
