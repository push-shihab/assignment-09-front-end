import Image from "next/image";
import Link from "next/link";

const SeconderyButton = ({ name, link }) => {
  return (
    <Link
      href={link}
      className="border border-[#D97757] rounded-box text-[16px] py-2.5 px-5"
    >
      {name}
    </Link>
  );
};

export default SeconderyButton;
