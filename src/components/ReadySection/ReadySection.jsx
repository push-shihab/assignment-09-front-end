const ReadySection = () => {
  return (
    <section className="w-full dark:bg-[#d9785725] px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-14 md:py-20">
      <div className="container mx-auto">
        <div className="w-full rounded-2xl bg-white dark:bg-[#1e1e1e] border border-black/10 dark:border-white/10 px-6 sm:px-12 md:px-20 py-12 sm:py-16 flex flex-col items-center text-center gap-5">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] dark:text-white tracking-tight leading-tight">
              Ready to Find Your
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#D97757] tracking-tight leading-tight mt-1">
              Study Space?
            </h2>
          </div>

          <p className="text-[#555] dark:text-white/45 text-sm sm:text-base max-w-md leading-relaxed">
            Join thousands of students already booking smarter with StudyNook.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
            <button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#D97757] hover:bg-[#c4674a] text-white text-sm font-semibold tracking-wide transition-colors duration-200">
              Get Started Free →
            </button>
            <button className="w-full sm:w-auto px-6 py-3 rounded-lg border border-black/20 dark:border-white/20 text-[#1a1a1a] dark:text-white text-sm font-semibold tracking-wide hover:border-[#D97757]/60 hover:text-[#D97757] dark:hover:border-[#D97757]/60 dark:hover:text-[#D97757] transition-all duration-200">
              Browse Rooms
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadySection;
