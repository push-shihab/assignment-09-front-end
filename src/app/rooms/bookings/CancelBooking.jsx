"use client";

import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const CancelBooking = ({ booking }) => {
  const handleCancel = async () => {
    const fetchCancel = await fetch(
      `${process.env.NEXT_PUBLIC_FETCHURL}/rooms/bookings/cancel/${booking._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
      },
    );
    const res = await fetchCancel.json();
    if (res.acknowledged) {
      toast.success("Successfully canceled the booking");
      redirect("/rooms/bookings");
    } else {
      toast.error("Something wronged happened");
    }
  };
  return (
    <>
      {booking.status == "Confirmed" ? (
        <>
          <button
            className="btn btn-xs btn-outline btn-error rounded-md px-3"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Cancel
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle text-white"
          >
            <div className="modal-box bg-black">
              <h3 className="font-bold text-lg">
                Are you sure of canceling{" "}
                <span className="font-bold text-red-600">
                  {booking.roomName}
                </span>
                ?
              </h3>
              <p className="py-4">
                This can not be <span className=" text-red-600">undone!</span>
              </p>
              <p className="py-4">If yes then click on Cancel</p>
              <div className="modal-action">
                <form method="dialog" className="flex gap-3">
                  <button
                    className="px-6 py-3 rounded-lg cursor-pointer bg-red-700 hover:bg-red-500/80 text-white text-sm font-semibold tracking-wide transition-colors duration-200"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button className="px-6 py-3 rounded-lg cursor-pointer border border-red-300  text-white text-sm font-semibold tracking-wide transition-colors duration-200">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </>
      ) : (
        "-"
      )}
    </>
  );
};

export default CancelBooking;
