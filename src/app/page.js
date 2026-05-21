import Banner from "@/components/Banner/Banner";
import EverythingSection from "@/components/EverythingSection/EverythingSection";
import LatestRooms from "@/components/LatestRooms/LatestRooms";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <LatestRooms></LatestRooms>
      <EverythingSection></EverythingSection>
    </div>
  );
}
