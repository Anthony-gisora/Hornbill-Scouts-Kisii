import Link from "next/link";
import Image from "next/image";
import hornbill from "../public/Hornbill.png";

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between items-center px-[10px] navBar md:h-[10%] h-[7%]">
      <div className="">
        <Image
          src={hornbill}
          className="md:h-[60px] md:w-[60px] h-[8vh] w-[8vh]"
        />
      </div>
      <div className="bg-amber-900">center</div>
      <div className="bg-amber-300">right</div>
    </nav>
  );
};

export default NavBar;
