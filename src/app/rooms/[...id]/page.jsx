import Image from "next/image";

const RoomDetails = async ({ params }) => {
  const { id } = await params;
  const fetchData = await fetch(`${process.env.FETCHURL}/rooms/${id[0]}`);
  const res = await fetchData.json();
  const data = res[0];
  return (
    <main className=" bg-[#111111]">
      <div className="min-h-screen text-white p-6 container mx-auto">
        <a
          href="#"
          className="text-sm text-gray-400 hover:text-white mb-6 inline-block"
        >
          ← Back to Rooms
        </a>

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
                <span>
                  📍 {data.floor}
                  {data.floor.trim() === "1" ? (
                    <>st</>
                  ) : data.floor.trim() === "2" ? (
                    <>nd</>
                  ) : data.floor.trim() === "3" ? (
                    <>rd</>
                  ) : (
                    <>th</>
                  )}
                </span>
                <span>👥 ${data.capacity} people</span>
                <span>
                  🔵 Created by{" "}
                  <span className="text-blue-400 font-medium">Sadia Karim</span>
                </span>
              </div>
            </div>

            <div>
              <span className="badge bg-[#2a2a2a] border border-[#3a3a3a] text-white text-sm px-4 py-3 rounded-lg">
                <span className="text-yellow-400 font-bold mr-1">47</span> Total
                Bookings
              </span>
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                Owner Controls
              </p>
              <div className="flex gap-3">
                <button className="flex-1 btn btn-sm bg-[#3a3a1a] hover:bg-[#4a4a2a] border border-[#5a5a2a] text-yellow-300 rounded-lg normal-case">
                  ✏️ Edit Room
                </button>
                <button className="flex-1 btn btn-sm bg-[#3a1a1a] hover:bg-[#4a2a2a] border border-[#5a2a2a] text-red-400 rounded-lg normal-case">
                  🗑️ Delete Room
                </button>
              </div>
            </div>

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
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 flex flex-col gap-4 sticky top-6">
              <div>
                <p className="text-2xl font-bold text-yellow-400">
                  ${data.rate}{" "}
                  <span className="text-sm text-gray-400 font-normal">
                    / hour
                  </span>
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Instant Booking Confirmation
                </p>
              </div>

              <div className="divider my-0 border-[#2a2a2a]" />

              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 uppercase tracking-widest">
                  Date
                </label>
                <input
                  type="date"
                  defaultValue="2025-06-15"
                  className="input input-sm bg-[#111] border border-[#333] text-white rounded-lg w-full focus:outline-none focus:border-yellow-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 uppercase tracking-widest">
                  Start Time
                </label>
                <select className="select select-sm bg-[#111] border border-[#333] text-white rounded-lg w-full focus:outline-none focus:border-yellow-500">
                  <option>11:00 AM</option>
                  <option>12:00 PM</option>
                  <option>01:00 PM</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 uppercase tracking-widest">
                  End Time
                </label>
                <select className="select select-sm bg-[#111] border border-[#333] text-white rounded-lg w-full focus:outline-none focus:border-yellow-500">
                  <option>01:00 PM</option>
                  <option>02:00 PM</option>
                  <option>03:00 PM</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 uppercase tracking-widest">
                  Special Note (Optional)
                </label>
                <textarea
                  placeholder="Any special requests..."
                  rows={3}
                  className="textarea textarea-sm bg-[#111] border border-[#333] text-white placeholder-gray-600 rounded-lg w-full resize-none focus:outline-none focus:border-yellow-500"
                />
              </div>

              <div className="flex items-center justify-between bg-[#111] border border-[#2a2a2a] rounded-lg px-4 py-3">
                <div>
                  <p className="text-xs text-gray-400">2 hrs × $5/hr</p>
                  <p className="text-xs text-gray-500">Total Cost</p>
                </div>
                <p className="text-xl font-bold text-yellow-400">$10</p>
              </div>

              <button className="btn w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-lg border-none normal-case text-sm">
                Confirm Booking →
              </button>

              <button className="btn btn-outline w-full border-[#333] text-white hover:bg-[#2a2a2a] hover:border-[#444] rounded-lg normal-case text-sm">
                Login to Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RoomDetails;
