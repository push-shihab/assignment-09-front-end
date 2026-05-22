"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const EditRoom = ({ room }) => {
  const amenities = [
    "Whiteboard",
    "Wi-Fi",
    "Projector",
    "Power Outlets",
    "Quiet Zone",
    "Air Conditioning",
  ];

  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = async (data) => {
    const updatedData = {
      name: data.name === "" ? room.name : data.name,
      image: data.image === "" ? room.image : data.image,
      rate: data.rate === "" ? room.rate : data.rate,
      floor: data.floor === "" ? room.floor : data.floor,
      capacity: data.capacity === "" ? room.capacity : data.capacity,
      description:
        data.description === "" ? room.description : data.description,
      amenities: data.amenities,
    };
    const fetchData = await fetch(
      `${process.env.NEXT_PUBLIC_FETCHURL}/rooms/update/${room._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedData),
      },
    );
    const res = await fetchData.json();
    if (res.modifiedCount > 0) {
      toast.success("Room's data edited successfully👏");
      document.getElementById(`edit_modal_${room._id}`).close();
      router.refresh();
    } else {
      toast.error("Something wronged happened💔");
    }
  };

  return (
    <div>
      <button
        className="px-6 py-3 rounded-lg cursor-pointer bg-[#D97757] hover:bg-[#c4674a] text-white text-sm font-semibold tracking-wide transition-colors duration-200"
        onClick={() =>
          document.getElementById(`edit_modal_${room?._id}`).showModal()
        }
      >
        ✏️ Edit Room
      </button>

      <dialog
        id={`edit_modal_${room?._id}`}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box max-w-4xl bg-[#1a1a1a] border border-[#2e2e2e] rounded-2xl p-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full p-8 space-y-8"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#D97757]">Edit Room</h2>

                <button
                  type="button"
                  onClick={() =>
                    document.getElementById(`edit_modal_${room?._id}`).close()
                  }
                  className="btn btn-sm btn-circle bg-[#D97757]"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-[#cccccc] text-sm mb-1">
                    Room Name
                  </label>

                  <input
                    type="text"
                    placeholder={room?.name || "Room Name"}
                    className="w-full bg-[#111111] border border-[#2e2e2e] rounded-lg px-4 py-2.5 text-[#eeeeee] text-sm placeholder-[#666666] focus:outline-none focus:border-[#D97757] transition-colors"
                    {...register("name")}
                  />
                </div>

                <div>
                  <label className="block text-[#cccccc] text-sm mb-1">
                    Description
                  </label>

                  <textarea
                    rows={4}
                    placeholder={room?.description || "Room Description"}
                    className="w-full bg-[#111111] border border-[#2e2e2e] rounded-lg px-4 py-2.5 text-[#eeeeee] text-sm placeholder-[#666666] focus:outline-none focus:border-[#D97757] transition-colors resize-y"
                    {...register("description")}
                  />
                </div>

                <div>
                  <label className="block text-[#cccccc] text-sm mb-1">
                    Image URL
                  </label>

                  <input
                    type="url"
                    placeholder={room?.image || "https://example.com/image.jpg"}
                    className="w-full bg-[#111111] border border-[#2e2e2e] rounded-lg px-4 py-2.5 text-[#eeeeee] text-sm placeholder-[#666666] focus:outline-none focus:border-[#D97757] transition-colors"
                    {...register("image")}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-5 border-b border-[#2e2e2e] pb-3">
                <h2 className="text-[#D97757] text-xs font-bold tracking-widest uppercase">
                  Room Specifications
                </h2>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#cccccc] text-sm mb-1">
                      Floor
                    </label>

                    <input
                      type="text"
                      placeholder={room?.floor || "e.g. 3rd Floor"}
                      className="w-full bg-[#111111] border border-[#2e2e2e] rounded-lg px-4 py-2.5 text-[#eeeeee] text-sm placeholder-[#666666] focus:outline-none focus:border-[#D97757] transition-colors"
                      {...register("floor")}
                    />
                  </div>

                  <div>
                    <label className="block text-[#cccccc] text-sm mb-1">
                      Capacity
                    </label>

                    <input
                      type="number"
                      placeholder={room?.capacity?.toString() || "4"}
                      className="w-full bg-[#111111] border border-[#2e2e2e] rounded-lg px-4 py-2.5 text-[#eeeeee] text-sm placeholder-[#666666] focus:outline-none focus:border-[#D97757] transition-colors"
                      {...register("capacity")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#cccccc] text-sm mb-1">
                    Hourly Rate (USD)
                  </label>

                  <div className="flex items-center bg-[#111111] border border-[#2e2e2e] rounded-lg overflow-hidden focus-within:border-[#D97757] transition-colors">
                    <span className="px-3 text-[#666666] text-sm border-r border-[#2e2e2e]">
                      $
                    </span>

                    <input
                      type="number"
                      step="0.01"
                      placeholder={room?.rate?.toString() || "5"}
                      className="flex-1 bg-transparent px-4 py-2.5 text-[#eeeeee] text-sm placeholder-[#666666] focus:outline-none"
                      {...register("rate")}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-5 border-b border-[#2e2e2e] pb-3">
                <span className="text-lg">✨</span>

                <h2 className="text-[#D97757] text-xs font-bold tracking-widest uppercase">
                  Amenities
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {amenities.map((amenity) => (
                  <label
                    key={amenity}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-[#2e2e2e] bg-[#111111] text-[#888888] text-sm cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={amenity}
                      defaultChecked={room?.amenities?.includes(amenity)}
                      className="checkbox checkbox-sm checkbox-warning"
                      {...register("amenities")}
                    />

                    {amenity}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="px-6 py-3 rounded-lg cursor-pointer bg-[#D97757] hover:bg-[#c4674a] text-white text-sm font-semibold tracking-wide transition-colors duration-200 w-full"
              >
                🚀 Update Room
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default EditRoom;
