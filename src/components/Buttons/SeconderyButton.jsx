import Image from "next/image";
import Link from "next/link";

const SeconderyButton = ({ name, link }) => {
  return (
    <Link
      href={link}
      className="px-6 py-3 rounded-lg border border-black/20 dark:border-white/20 text-[#1a1a1a] dark:text-white text-sm font-semibold tracking-wide hover:border-[#D97757]/60 hover:text-[#D97757] dark:hover:border-[#D97757]/60 dark:hover:text-[#D97757] transition-all duration-200"
    >
      {name}
    </Link>
  );
};

export default SeconderyButton;
