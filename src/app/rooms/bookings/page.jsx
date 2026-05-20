import React from "react";

const AllBookings = () => {
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

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="card bg-base-200 border border-base-300 shadow-sm">
            <div className="card-body p-5 gap-1">
              <p className="text-xs font-semibold tracking-widest uppercase text-base-content/50">
                Total Bookings
              </p>
              <p className="text-3xl font-extrabold tracking-tight text-base-content">
                12
              </p>
            </div>
          </div>
          <div className="card bg-base-200 border border-base-300 shadow-sm">
            <div className="card-body p-5 gap-1">
              <p className="text-xs font-semibold tracking-widest uppercase text-base-content/50">
                Confirmed
              </p>
              <p className="text-3xl font-extrabold tracking-tight text-success">
                8
              </p>
            </div>
          </div>
          <div className="card bg-base-200 border border-base-300 shadow-sm">
            <div className="card-body p-5 gap-1">
              <p className="text-xs font-semibold tracking-widest uppercase text-base-content/50">
                Cancelled
              </p>
              <p className="text-3xl font-extrabold tracking-tight text-error">
                4
              </p>
            </div>
          </div>
          <div className="card bg-base-200 border border-base-300 shadow-sm">
            <div className="card-body p-5 gap-1">
              <p className="text-xs font-semibold tracking-widest uppercase text-base-content/50">
                Total Spent
              </p>
              <p className="text-3xl font-extrabold tracking-tight text-warning">
                $86
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
                <tr className="hover:bg-base-300/30 transition-colors duration-150">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-base-300 flex items-center justify-center text-lg flex-shrink-0">
                        🏛️
                      </div>
                      <div>
                        <p className="font-semibold text-sm leading-tight">
                          Quiet Focus Room A
                        </p>
                        <p className="text-xs text-base-content/45 mt-0.5">
                          Floor 3
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-base-content/70 whitespace-nowrap">
                    Jun 20, 2025
                  </td>
                  <td className="py-4 px-4 text-sm text-base-content/70 whitespace-nowrap">
                    10:00 – 13:00
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    <span className="text-sm text-base-content/70">3 hrs</span>
                    <span className="text-base-content/30 mx-1">·</span>
                    <span className="text-sm font-semibold text-warning">
                      $15
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="badge badge-success badge-outline gap-1.5 font-semibold text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />
                      Confirmed
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="btn btn-xs btn-outline btn-error rounded-md px-3">
                      Cancel
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AllBookings;
