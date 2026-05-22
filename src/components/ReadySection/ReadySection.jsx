import PrimaryButton from "../Buttons/PrimaryButton";
import SeconderyButton from "../Buttons/SeconderyButton";

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
            <PrimaryButton
              name={"Get Started Free"}
              link={"/register"}
            ></PrimaryButton>
            <SeconderyButton
              name={"Explore Rooms"}
              link={"/rooms"}
            ></SeconderyButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadySection;
