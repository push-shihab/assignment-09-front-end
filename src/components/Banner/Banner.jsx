import DotGrid from "./DotGrid";
import PrimaryButton from "../Buttons/PrimaryButton";
import SeconderyButton from "../Buttons/SeconderyButton";

const Banner = () => {
  return (
    <div className="relative h-190 w-full overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-30">
        <DotGrid
          dotSize={5}
          gap={12}
          baseColor="#D97757"
          activeColor="#5227FF"
          proximity={80}
          shockRadius={250}
          shockStrength={4}
          resistance={550}
          returnDuration={1}
        />
      </div>

      <div className="absolute inset-0 z-40 flex items-center justify-center">
        <div className="container mx-auto flex flex-col items-center text-center text-white">
          <div className="border-l-3 border-[#D97757] pl-3 ">
            Now with instant booking
          </div>

          <h1 className="mt-4 text-6xl font-bold leading-tight">
            Find Your <span className="text-[#D97757]">Perfect</span>
            <br />
            Study Room
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Browse and book quiet, private study rooms in your library. List
            your own room and earn from it.
          </p>

          <div className="mt-8 flex gap-4">
            <PrimaryButton name={"Explore Rooms"} link={"/rooms"} />

            <SeconderyButton name={"Start Experiencing"} link={"/register"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
