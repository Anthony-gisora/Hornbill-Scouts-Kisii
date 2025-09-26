import Link from "next/link";
import Image from "next/image";
import hornbill from "../public/Hornbill.png";

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between items-center  navBar ">
      <div className="w-fit flex justify-center items-center  ">
        <Image
          alt="hornbill icon"
          src={hornbill}
          className="md:h-[60px] md:w-[60px] h-[8vh] w-[8vh]"
        />
        <span className="text-[16px]">
          Hi, <br /> <span className="text-[#9c3e03] text-[18px]">Anthony</span>
        </span>
      </div>

      {/* desktop navigation */}
      <div className="w-full flex justify-evenly">
        <div className="bg-amber-900">center</div>
        <div className="bg-amber-300">right</div>
      </div>
      {/* mobile navigation */}

      <div className="w-full flex justify-evenly">
        <Link href="#">Home</Link>
      </div>
    </nav>
  );
};

export default NavBar;
