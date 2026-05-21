import {
  Zap,
  CalendarCheck,
  BadgeDollarSign,
  Search,
  Smartphone,
  LayoutDashboard,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Zap,
    title: "Instant Booking",
    description:
      "Book your room in seconds. Our real-time availability system shows you exactly which rooms are open right now.",
  },
  {
    icon: CalendarCheck,
    title: "Conflict-Free Scheduling",
    description:
      "Our smart conflict detection ensures no double bookings. Every reservation is protected and guaranteed.",
  },
  {
    icon: BadgeDollarSign,
    title: "List & Earn",
    description:
      "Have a spare room? List it on StudyNook and start earning. Set your own rates and availability schedule.",
  },
  {
    icon: Search,
    title: "Advanced Search",
    description:
      "Filter by amenities, floor, capacity, and price. Find exactly the room type that fits your study needs.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description:
      "Book on the go from any device. Full responsive design for mobile, tablet, and desktop experiences.",
  },
  {
    icon: LayoutDashboard,
    title: "My Dashboard",
    description:
      "Manage all your bookings and listings from one central dashboard. Track costs and manage your schedule.",
  },
];

const EverythingSection = () => {
  return (
    <section className="w-full bg-[#f5f3ef] dark:bg-[#161616] px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24">
      <div className="container mx-auto">
        <div className="mb-10 sm:mb-14 flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] dark:text-white leading-tight tracking-tight mb-3">
            Everything You <span className="text-[#D97757]">Need</span>
          </h2>
          <p className="text-[#555] dark:text-white/45 text-sm sm:text-base max-w-sm leading-relaxed">
            Powerful features built for students, researchers, and knowledge
            workers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EverythingSection;
