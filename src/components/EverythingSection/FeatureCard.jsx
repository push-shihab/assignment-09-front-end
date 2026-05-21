import React from "react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="group relative flex flex-col gap-4 p-5 sm:p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#1e1e1e] hover:border-[#D97757]/60 dark:hover:border-[#D97757]/60 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none">
      <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#D97757]/10 dark:bg-[#D97757]/15 group-hover:bg-[#D97757]/20 transition-colors duration-300">
        <Icon className="w-5 h-5 text-[#D97757]" strokeWidth={1.8} />
      </div>
      <div>
        <h3 className="text-[#1a1a1a] dark:text-white font-semibold text-base mb-1.5 tracking-tight">
          {title}
        </h3>
        <p className="text-[#555] dark:text-white/45 text-sm leading-relaxed">
          {description}
        </p>
      </div>
      <span className="absolute bottom-0 left-5 right-5 h-px bg-linear-to-r from-transparent via-[#D97757]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};
export default FeatureCard;
