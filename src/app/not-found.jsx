import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-base-100 flex items-center justify-center px-4">
      <div className="card w-full max-w-xl bg-base-100 shadow-2xl border border-[#D97757]/20">
        <div className="card-body items-center text-center py-14">
          <div className="text-8xl font-black text-[#5227FF]">404</div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#D97757] mt-4">
            Page Not Found
          </h1>

          <p className="text-base-content/70 max-w-md mt-2">
            The page you are looking for does not exist or has been moved.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/"
              className="btn bg-[#D97757] border-none hover:bg-[#c86647] text-white"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
