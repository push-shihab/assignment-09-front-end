import SeconderyButton from "../Buttons/SeconderyButton";
import LatestRoom from "./LatestRoom";

const LatestRooms = async () => {
  const data = await fetch(`${process.env.FETCHURL}/rooms/latest`);
  const latestRoomsData = await data.json();
  // console.log(latestRoomsData);
  return (
    <main className="bg-[#d9785725]">
      <div className="container mx-auto py-15 space-y-3">
        <h1 className="font-extrabold text-5xl">
          Available <span className="text-[#5227FF]">Study Rooms</span>
        </h1>
        <p className="text-[#858585] font-bold">
          Discover the latest 6 rooms. Book your perfect study spot today.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {latestRoomsData.map((room) => (
            <LatestRoom key={room._id} room={room}></LatestRoom>
          ))}
        </div>
        <div className="text-center">
          <SeconderyButton
            name={"Explore All Rooms"}
            link={"/"}
          ></SeconderyButton>
        </div>
      </div>
    </main>
  );
};

export default LatestRooms;
