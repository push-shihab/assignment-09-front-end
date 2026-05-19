import Banner from "@/components/Banner/Banner";
import LatestRooms from "@/components/LatestRooms/LatestRooms";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="">
      <NavBar></NavBar>
      <Banner></Banner>
      <LatestRooms></LatestRooms>
    </div>
  );
}
