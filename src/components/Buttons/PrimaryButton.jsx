import Link from "next/link";

const PrimaryButton = ({ name, link }) => {
  return (
    <Link
      href={link}
      className="bg-[#D97757] rounded-box text-[16px] py-2.5 px-5 text-white"
    >
      {name}
    </Link>
  );
};

export default PrimaryButton;
