import Image from "next/image";
import Booking from "./Booking";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import EditRoom from "./EditRoom";
import DeleteRoom from "./DeleteRoom";
import { IoIosCreate } from "react-icons/io";

export async function generateMetadata() {
  return {
    title: "Study-Nook | Room Details",
  };
}

const RoomDetails = async ({ params }) => {
  const { session } = await auth.api.getSession({
    headers: await headers(),
  });
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const { id } = await params;
  const fetchData = await fetch(`${process.env.FETCHURL}/rooms/${id[0]}`, {
    headers: {
      authorization: token,
    },
  });
  const res = await fetchData.json();
  const data = res[0];
  const isOwner = session.userId === data.id;
  return (
    <main className=" bg-[#111111]">
      <div className="min-h-screen text-white p-6 container mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
          <div className="flex-1 flex flex-col gap-5">
            <div className="rounded-xl bg-[#1e2e2a] flex items-center justify-center overflow-hidden">
              <Image
                src={data.image}
                alt={data.name}
                width={300}
                height={300}
                className="object-cover w-full"
              ></Image>
            </div>
            <div>
              <h1 className="text-3xl font-bold">{data.name}</h1>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-300">
                <span>📍 Floor: {data.floor}</span>
                <span>👥 ${data.capacity} people</span>
                <span className="flex items-center gap-1">
                  <span className="flex items-center gap-1">
                    <IoIosCreate color="#D97757" /> Created by{" "}
                  </span>
                  <span className="text-blue-400 font-medium">
                    {data.userName}
                  </span>
                </span>
              </div>
            </div>
            <div>
              <span className="badge bg-[#2a2a2a] border border-[#3a3a3a] text-white text-sm px-4 py-3 rounded-lg">
                <span className="text-[#D97757] font-bold mr-1">
                  {data.bookings}
                </span>{" "}
                Total Bookings
              </span>
            </div>

            {isOwner && (
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                  Owner Controls
                </p>
                <div className="flex gap-3">
                  <EditRoom room={data}></EditRoom>
                  <DeleteRoom room={data}></DeleteRoom>
                </div>
              </div>
            )}

            <p className="text-sm text-gray-400 leading-relaxed">
              {data.description}
            </p>

            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                Amenities
              </p>
              <div className="flex flex-wrap gap-2">
                {data.amenities.map((amenity, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 bg-[#1e1e1e] border border-[#333] text-gray-300 text-xs px-3 py-1.5 rounded-full"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-80 shrink-0">
            <Booking room={data} userId={session.userId}></Booking>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RoomDetails;
