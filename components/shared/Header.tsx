import Link from "next/link";
import logo from "@/assets/logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex pt-[2rem] lg:pt-[2.5rem]">
      <Link
        href={""}
        className={`uppercase border-[1px] border-[#FFE81F] rounded-[15px] bg-black/30 h-fit px-[1.6rem] py-[0.8rem] font-medium hover:text-black duration-300 ease-in-out hidden lg:block yellow-btn-hover`}
      >
        <span>Contact Us</span>
      </Link>
      <Image
        src={logo}
        width={230}
        height={230}
        className="lg:mx-auto w-[10rem] lg:w-[14.5rem] lg:translate-x-[-2rem]"
        alt="House&Classics-Logo"
      />
    </header>
  );
};

export default Header;
