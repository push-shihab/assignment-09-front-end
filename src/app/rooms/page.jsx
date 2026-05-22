import RoomsClient from "./RoomsClient";

const Rooms = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_FETCHURL}/rooms`);
  const allRooms = await data.json();

  return <RoomsClient allRooms={allRooms} />;
};

export default Rooms;
