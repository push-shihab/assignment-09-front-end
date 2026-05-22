import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import CancelBooking from "./CancelBooking";
import Link from "next/link";

const AllBookings = async () => {
  const { session } = await auth.api.getSession({
    headers: await headers(),
  });
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const data = await fetch(
    `${process.env.FETCHURL}/rooms/bookings/${session.userId}`,
    {
      headers: {
        authorization: token,
      },
    },
  );
  const res = await data.json();
  return (
    <main className="py-10 px-4">
      <div className="container mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">
            My Bookings
          </h1>
          <p className="text-base-content/50 text-sm mt-1">
            Track and manage all your study room reservations
          </p>
        </div>
        {res.length == 0 ? (
          <div className="card bg-[#D97757]/18 shadow-xl border border-[#D97757] py-10 my-10 h-[50vh] flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-4xl font-bold text-[#5227FF]">
                No Data Found
              </h2>

              <p className="text-2xl text-gray-500">
                You haven&apos;t booked a room yet
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="card bg-base-200 border border-base-300 shadow-sm">
                <div className="card-body p-5 gap-1">
                  <p className="text-xs font-semibold tracking-widest uppercase text-base-content/50">
                    Total Bookings
                  </p>
                  <p className="text-3xl font-extrabold tracking-tight text-base-content">
                    {res.length}
                  </p>
                </div>
              </div>
              <div className="card bg-base-200 border border-base-300 shadow-sm">
                <div className="card-body p-5 gap-1">
                  <p className="text-xs font-semibold tracking-widest uppercase text-base-content/50">
                    Confirmed
                  </p>
                  <p className="text-3xl font-extrabold tracking-tight text-success">
                    {
                      res.filter((booking) => booking.status == "Confirmed")
                        .length
                    }
                  </p>
                </div>
              </div>
              <div className="card bg-base-200 border border-base-300 shadow-sm">
                <div className="card-body p-5 gap-1">
                  <p className="text-xs font-semibold tracking-widest uppercase text-base-content/50">
                    Cancelled
                  </p>
                  <p className="text-3xl font-extrabold tracking-tight text-error">
                    {
                      res.filter((booking) => booking.status == "Canceled")
                        .length
                    }
                  </p>
                </div>
              </div>
              <div className="card bg-base-200 border border-base-300 shadow-sm">
                <div className="card-body p-5 gap-1">
                  <p className="text-xs font-semibold tracking-widest uppercase text-base-content/50">
                    Total Spent
                  </p>
                  <p className="text-3xl font-extrabold tracking-tight text-[#5227FF]">
                    $ {res.reduce((acc, booking) => acc + booking.totalBill, 0)}
                  </p>
                </div>
              </div>
            </div>

            <div className="card bg-base-200 border border-base-300 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr className="border-b border-base-300">
                      {[
                        "Room",
                        "Date",
                        "Time Slot",
                        "Duration",
                        "Status",
                        "Action",
                      ].map((h) => (
                        <th
                          key={h}
                          className="py-3 px-4 text-xs font-semibold tracking-widest uppercase text-base-content/40 bg-transparent"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-base-300">
                    {res.map((booking) => (
                      <tr
                        key={booking._id}
                        className="hover:bg-base-300/30 transition-colors duration-150"
                      >
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 flex items-center justify-center text-lg shrink-0">
                              <Image
                                src={booking.roomImage}
                                alt={booking.roomName}
                                width={300}
                                height={300}
                                className="w-full object-cover rounded-box"
                              ></Image>
                            </div>
                            <div>
                              <Link
                                href={`/rooms/${booking.roomId}`}
                                className="font-semibold text-sm leading-tight hover:text-[#5227FF]"
                              >
                                {booking.roomName}
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-sm text-base-content/70 whitespace-nowrap">
                          {booking.date}
                        </td>
                        <td className="py-4 px-4 text-sm text-base-content/70 whitespace-nowrap">
                          {booking.startTime} – {booking.endTime}
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <span className="text-sm text-base-content/70">
                            {booking.totalHours} hrs
                          </span>
                          <span className="text-base-content/30 mx-1">·</span>
                          <span className="text-sm font-semibold text-warning">
                            $ {booking.totalBill}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`badge ${booking.status == "Confirmed" ? "border-[#5227FF] text-[#5227FF]" : "badge-error"} badge-outline gap-1.5 font-semibold text-xs`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${booking.status == "Confirmed" ? "bg-[#5227FF]" : "bg-error"} inline-block`}
                            />
                            {booking.status}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <CancelBooking booking={booking}></CancelBooking>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default AllBookings;
