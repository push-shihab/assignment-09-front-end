import React from "react";
import { BallTriangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[50vh]">
      <BallTriangle
        height={250}
        width={250}
        radius={5}
        color="#D97757"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
