import Link from "next/link";
import LatestRoom from "./LatestRoom";

const LatestRooms = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_FETCHURL}/rooms/latest`);
  const latestRoomsData = await data.json();
  const latestRooms = latestRoomsData.reverse();

  return (
    <main className="bg-[#d9785725] px-4 sm:px-6 md:px-10">
      <div className="container mx-auto py-10 sm:py-12 md:py-15 space-y-4 sm:space-y-5">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight">
          Available <span className="text-[#5227FF]">Study Rooms</span>
        </h1>

        <p className="text-[#858585] font-bold text-sm sm:text-base">
          Discover the latest 6 rooms. Book your perfect study spot today.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {latestRooms.map((room) => (
            <LatestRoom key={room._id} room={room} />
          ))}
        </div>

        <div className="text-center pt-4 sm:pt-6">
          <Link
            href={"/rooms"}
            className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-[#D97757] text-[#D97757] text-xs sm:text-sm font-semibold hover:bg-[#D97757] hover:text-black tracking-wide transition-colors duration-200"
          >
            Explore Rooms
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LatestRooms;
