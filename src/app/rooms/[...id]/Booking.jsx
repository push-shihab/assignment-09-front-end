"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const bookingTimes = [
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

const BookingCard = ({ room, userId }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const startTime = watch("startTime");
  const endTime = watch("endTime");

  const availableEndTimes = bookingTimes.filter((time) => {
    if (!startTime) return true;
    return time > startTime;
  });

  const totalHours =
    startTime && endTime ? parseInt(endTime) - parseInt(startTime) : 0;

  const totalBill = totalHours * room.rate;

  const onSubmit = async (data) => {
    if (!totalHours) {
      alert("Please select valid booking times");
      return;
    }

    const fetchedData = await fetch(
      `${process.env.NEXT_PUBLIC_FETCHURL}/rooms/bookings?roomId=${room._id}&date=${data.date}&startTime=${data.startTime}&endTime=${data.endTime}`,
    );
    const hasConflict = await fetchedData.json();
    if (hasConflict.length > 0) {
      toast.error("Book a different slot.");
      return;
    }

    const bookingData = {
      roomId: room._id,
      roomName: room.name,
      roomImage: room.image,
      date: data.date,
      startTime: data.startTime,
      endTime: data.endTime,
      specialNote: data.specialNote || "",
      totalHours,
      totalBill,
      roomRate: room.rate,
      userId,
      status: "Confirmed",
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_FETCHURL}/rooms/book`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        },
      );

      const result = await response.json();
      if (result.acknowledged) {
        toast.success("Booking has been confirmed😍");
        router.push("/rooms/bookings");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-[#1a1a1a] border border-[#d97757]/50 rounded-xl p-5 flex flex-col gap-4 sticky top-6 shadow-[0_0_10px_0_#d97757]/30">
      <div>
        <p className="text-2xl font-bold text-[#D97757]">
          ${room.rate}
          <span className="text-sm text-gray-400 font-normal"> / hour</span>
        </p>

        <p className="text-xs text-gray-500 mt-0.5">
          Instant Booking Confirmation
        </p>
      </div>

      <div className="divider my-0 border-[#2a2a2a]" />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500 uppercase tracking-widest">
            Date
          </label>

          <input
            type="date"
            className="input input-sm bg-[#111] border border-[#333] text-white rounded-lg w-full focus:outline-none focus:border-[#D97757]"
            {...register("date", {
              required: "Date is required",
            })}
          />

          {errors.date && (
            <p className="text-red-400 text-xs">{errors.date.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500 uppercase tracking-widest">
            Start Time
          </label>

          <select
            className="select select-sm bg-[#111] border border-[#333] text-white rounded-lg w-full focus:outline-none focus:border-[#D97757]"
            {...register("startTime", {
              required: "Start time is required",
              onChange: () => {
                setValue("endTime", "");
              },
            })}
          >
            <option value="">Select Start Time</option>

            {bookingTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>

          {errors.startTime && (
            <p className="text-red-400 text-xs">{errors.startTime.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500 uppercase tracking-widest">
            End Time
          </label>

          <select
            className="select select-sm bg-[#111] border border-[#333] text-white rounded-lg w-full focus:outline-none focus:border-[#D97757]"
            {...register("endTime", {
              required: "End time is required",
            })}
          >
            <option value="">Select End Time</option>

            {availableEndTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>

          {errors.endTime && (
            <p className="text-red-400 text-xs">{errors.endTime.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500 uppercase tracking-widest">
            Special Note (Optional)
          </label>

          <textarea
            rows={3}
            placeholder="Any special requests..."
            className="textarea textarea-sm bg-[#111] border border-[#333] text-white placeholder-gray-600 rounded-lg w-full resize-none focus:outline-none focus:border-[#D97757]"
            {...register("specialNote")}
          />
        </div>
        <div className="flex items-center justify-between bg-[#111] border border-[#2a2a2a] rounded-lg px-4 py-3">
          <div>
            <p className="text-xs text-gray-400">
              {totalHours} hrs × ${room.rate}/hr
            </p>

            <p className="text-xs text-gray-500">Total Cost</p>
          </div>

          <p className="text-xl font-bold text-[#D97757]">${totalBill}</p>
        </div>

        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-[#D97757] cursor-pointer hover:bg-[#c4674a] text-white text-sm font-semibold tracking-wide transition-colors duration-200"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingCard;
