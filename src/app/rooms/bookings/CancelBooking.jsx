"use client";

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
    console.log(res);
  };
  return (
    <>
      {booking.status == "Confirmed" ? (
        <button
          className="btn btn-xs btn-outline btn-error rounded-md px-3"
          onClick={handleCancel}
        >
          Cancel
        </button>
      ) : (
        "-"
      )}
    </>
  );
};

export default CancelBooking;
