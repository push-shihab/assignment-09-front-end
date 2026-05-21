"use client";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const bookingTimes = [
  "07:00 AM",
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
  "09:00 PM",
  "10:00 PM",
];

const BookingCard = ({ room, userId }) => {
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

    const start = dayjs(startTime, "hh:mm A");
    const current = dayjs(time, "hh:mm A");

    return current.isAfter(start);
  });

  const totalHours =
    startTime && endTime
      ? dayjs(endTime, "hh:mm A").diff(dayjs(startTime, "hh:mm A"), "hour")
      : 0;

  const totalBill = totalHours * room.rate;

  // const checkBookingConflict = async (roomId, date, startTime, endTime) => {
  //   try {
  //     const fetchedData = await fetch(
  //       `${process.env.NEXT_PUBLIC_FETCHURL}/rooms/bookings?roomId=${roomId}&date=${date}&startTime=${startTime}&endTime=${endTime}`,
  //     );
  //     const existingBookings = await fetchedData.json();
  //     console.log(existingBookings);

  //     // const hasConflict = existingBookings.some((booking) => {
  //     //   const existingStart = dayjs(booking.startTime, "hh:mm A");

  //     //   const existingEnd = dayjs(booking.endTime, "hh:mm A");

  //     //   const newStart = dayjs(startTime, "hh:mm A");

  //     //   const newEnd = dayjs(endTime, "hh:mm A");

  //     //   return newStart.isBefore(existingEnd) && newEnd.isAfter(existingStart);
  //     // });

  //     // return hasConflict;
  //   } catch (error) {
  //     console.log(error);
  //     return false;
  //   }
  // };

  const onSubmit = async (data) => {
    if (!totalHours) {
      alert("Please select valid booking times");
      return;
    }
    // const hasConflict = await checkBookingConflict(
    //   room._id,
    //   data.date,
    //   data.startTime,
    //   data.endTime,
    // );

    // if (hasConflict) {
    //   alert("This room is already booked during this time.");
    //   return;
    // }

    const fetchedData = await fetch(
      `${process.env.NEXT_PUBLIC_FETCHURL}/rooms/bookings?roomId=${room._id}&date=${data.date}&startTime=${data.startTime}&endTime=${data.endTime}`,
    );
    const existingBookings = await fetchedData.json();
    console.log(existingBookings);
    if (existingBookings.length > 0) {
      alert("Book a different slot.");
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
      console.log(result);
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    }
  };

  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 flex flex-col gap-4 sticky top-6">
      <div>
        <p className="text-2xl font-bold text-yellow-400">
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
            className="input input-sm bg-[#111] border border-[#333] text-white rounded-lg w-full focus:outline-none focus:border-yellow-500"
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
            className="select select-sm bg-[#111] border border-[#333] text-white rounded-lg w-full focus:outline-none focus:border-yellow-500"
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
            className="select select-sm bg-[#111] border border-[#333] text-white rounded-lg w-full focus:outline-none focus:border-yellow-500"
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
            className="textarea textarea-sm bg-[#111] border border-[#333] text-white placeholder-gray-600 rounded-lg w-full resize-none focus:outline-none focus:border-yellow-500"
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

          <p className="text-xl font-bold text-yellow-400">${totalBill}</p>
        </div>

        <button
          type="submit"
          className="btn w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-lg border-none normal-case text-sm"
        >
          Confirm Booking →
        </button>
      </form>
    </div>
  );
};

export default BookingCard;
