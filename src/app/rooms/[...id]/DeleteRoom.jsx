"use client";

import { redirect } from "next/navigation";

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
      alert("Your room deleted successfully");
      redirect("/rooms");
    }
  };
  return (
    <div>
      <button
        className="flex-1 btn btn-sm bg-[#3a1a1a] hover:bg-[#4a2a2a] border border-[#5a2a2a] text-red-400 rounded-lg normal-case"
        onClick={handleDelete}
      >
        🗑️ Delete Room
      </button>
    </div>
  );
};

export default DeleteRoom;
