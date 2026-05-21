"use client";
import { useSession } from "@/lib/auth-client";
import { useForm } from "react-hook-form";

const NewRoom = () => {
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const roomData = {
      name: data.name,
      description: data.description,
      image: data.image,
      floor: data.floor,
      capacity: data.capacity,
      rate: data.rate,
      amenities: data.amenities,
      id: session.session.userId,
      bookings: 0,
    };
    const fetchData = await fetch(
      `${process.env.NEXT_PUBLIC_FETCHURL}/rooms/new`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(roomData),
      },
    );
    const res = await fetchData.json();
    console.log(res);
  };

  const amenities = [
    "Whiteboard",
    "Wi-Fi",
    "Projector",
    "Power Outlets",
    "Quiet Zone",
    "Air Conditioning",
  ];

  return (
    <main>
      <div className="container mx-auto">
        <h1>Add a New Room</h1>
        <p>Fill in the details below to list your study room on StudyNook</p>
        <div className="min-h-screen flex flex-col items-center py-10 px-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-xl bg-[#1a1a1a] border border-[#2e2e2e] rounded-2xl p-8 space-y-8 shadow-2xl"
          >
            <div>
              <div className="flex items-center gap-2 mb-5 border-b border-[#2e2e2e] pb-3">
                <span className="text-lg">📋</span>
                <h2 className="text-[#f0b429] text-xs font-bold tracking-widest uppercase">
                  Basic Information
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-[#cccccc] text-sm mb-1">
                    Room Name <span className="text-[#f0b429]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Coding Quiz"
                    className="w-full bg-[#111111] border border-[#2e2e2e] rounded-lg px-4 py-2.5 text-[#eeeeee] text-sm placeholder-[#444444] focus:outline-none focus:border-[#f0b429] transition-colors"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 3,
                        message: "Minimum 3 characters",
                      },
                    })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[#cccccc] text-sm mb-1">
                    Description <span className="text-[#f0b429]">*</span>
                  </label>
                  <textarea
                    placeholder="Describe the room..."
                    rows={4}
                    className="w-full bg-[#111111] border border-[#2e2e2e] rounded-lg px-4 py-2.5 text-[#eeeeee] text-sm placeholder-[#444444] focus:outline-none focus:border-[#f0b429] transition-colors resize-y"
                    {...register("description", {
                      required: "Description is required",
                      minLength: {
                        value: 10,
                        message: "Minimum 10 characters",
                      },
                    })}
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[#cccccc] text-sm mb-1">
                    Image URL <span className="text-[#f0b429]">*</span>
                  </label>
                  <input
                    type="url"
                    placeholder="https://example.com/room-photo.jpg"
                    className="w-full bg-[#111111] border border-[#2e2e2e] rounded-lg px-4 py-2.5 text-[#eeeeee] text-sm placeholder-[#444444] focus:outline-none focus:border-[#f0b429] transition-colors"
                    {...register("image", {
                      required: "Image URL is required",
                      pattern: {
                        value: /^https?:\/\/.+/,
                        message: "Provide a valid image URL",
                      },
                    })}
                  />
                  {errors.image && (
                    <p className="text-red-500 text-sm">
                      {errors.image.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-5 border-b border-[#2e2e2e] pb-3">
                <h2 className="text-[#f0b429] text-xs font-bold tracking-widest uppercase">
                  Room Specifications
                </h2>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#cccccc] text-sm mb-1">
                      Floor <span className="text-[#f0b429]">*</span>
                    </label>
                    <input
                      type="number"
                      step="1"
                      placeholder="e.g. 2nd Floor"
                      className="w-full bg-[#111111] border border-[#2e2e2e] rounded-lg px-4 py-2.5 text-[#eeeeee] text-sm placeholder-[#444444] focus:outline-none focus:border-[#f0b429] transition-colors"
                      {...register("floor", {
                        required: "Floor number is required",
                      })}
                    />
                    {errors.floor && (
                      <p className="text-red-500 text-sm">
                        {errors.floor.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[#cccccc] text-sm mb-1">
                      Capacity (people){" "}
                      <span className="text-[#f0b429]">*</span>
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 5"
                      step="1"
                      className="w-full bg-[#111111] border border-[#2e2e2e] rounded-lg px-4 py-2.5 text-[#eeeeee] text-sm placeholder-[#444444] focus:outline-none focus:border-[#f0b429] transition-colors"
                      {...register("capacity", {
                        required: "Capacity is required",
                        min: {
                          value: 1,
                          message: "Minimum capacity is 1",
                        },
                      })}
                    />
                    {errors.capacity && (
                      <p className="text-red-500 text-sm">
                        {errors.capacity.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-[#cccccc] text-sm mb-1">
                    Hourly Rate (USD) <span className="text-[#f0b429]">*</span>
                  </label>
                  <div className="flex items-center bg-[#111111] border border-[#2e2e2e] rounded-lg overflow-hidden focus-within:border-[#f0b429] transition-colors">
                    <span className="px-3 text-[#666666] text-sm border-r border-[#2e2e2e]">
                      $
                    </span>
                    <input
                      type="number"
                      defaultValue="5"
                      step="1"
                      className="flex-1 bg-transparent px-4 py-2.5 text-[#eeeeee] text-sm focus:outline-none"
                      {...register("rate", {
                        required: "Hourly rate is required",
                        min: {
                          value: 1,
                          message: "Minimum rate is $1",
                        },
                      })}
                    />
                  </div>
                  {errors.rate && (
                    <p className="text-red-500 text-sm">
                      {errors.rate.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-5 border-b border-[#2e2e2e] pb-3">
                <span className="text-lg">✨</span>
                <h2 className="text-[#f0b429] text-xs font-bold tracking-widest uppercase">
                  Amenities
                </h2>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {amenities.map((amenity) => (
                  <label
                    key={amenity}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-[#2e2e2e] bg-[#111111] text-[#888888] text-sm cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={amenity}
                      className="checkbox checkbox-sm checkbox-warning"
                      {...register("amenities", {
                        validate: (value) =>
                          (value && value.length > 0) ||
                          "Select at least one amenity",
                      })}
                    />
                    {amenity}
                  </label>
                ))}
              </div>
              {errors.amenities && (
                <p className="text-red-500 text-sm">
                  {errors.amenities.message}
                </p>
              )}
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 bg-[#f0b429] text-black font-bold py-3 rounded-xl text-sm cursor-pointer"
              >
                🚀 Submit Room
              </button>
              <button
                type="button"
                className="px-6 py-3 border border-[#2e2e2e] text-[#aaaaaa] rounded-xl text-sm cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default NewRoom;
