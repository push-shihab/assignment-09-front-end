import Link from "next/link";

const PrimaryButton = ({ name, link }) => {
  return (
    <Link
      href={link}
      className="px-6 py-3 rounded-lg cursor-pointer bg-[#D97757] hover:bg-[#c4674a] text-white text-sm font-semibold tracking-wide transition-colors duration-200"
    >
      {name}
    </Link>
  );
};

export default PrimaryButton;
