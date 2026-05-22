"use client";

import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const DeleteRoom = ({ room }) => {
  const handleDelete = async () => {
    const fetchDelete = await fetch(
      `${process.env.NEXT_PUBLIC_FETCHURL}/rooms/delete/${room._id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      },
    );
    const res = await fetchDelete.json();
    if (res.acknowledged) {
      toast.success("Your room deleted successfully");
      redirect("/rooms");
    } else {
      toast.error("Something wronged happened");
    }
  };
  return (
    <div>
      <button
        className="px-6 py-3 rounded-lg cursor-pointer border border-[#D97757] hover:bg-[#c4674a] text-white text-sm font-semibold tracking-wide transition-colors duration-200"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        🗑️ Delete Room
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-black">
          <h3 className="font-bold text-lg">
            Are you sure of deleting{" "}
            <span className="font-bold text-red-600">{room.name}</span>?
          </h3>
          <p className="py-4">
            This can not be <span className=" text-red-600">undone!</span>
          </p>
          <p className="py-4">If yes then click on Delete</p>
          <div className="modal-action">
            <form method="dialog" className="flex gap-3">
              <button
                className="px-6 py-3 rounded-lg cursor-pointer bg-red-700 hover:bg-red-500/80 text-white text-sm font-semibold tracking-wide transition-colors duration-200"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button className="px-6 py-3 rounded-lg cursor-pointer border border-red-300  text-white text-sm font-semibold tracking-wide transition-colors duration-200">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DeleteRoom;
