import { Navbar, Button } from "flowbite-react";
import { IoIosSettings, IoIosFlash } from "react-icons/io";
import { IoReturnDownBack, IoReturnUpForward } from "react-icons/io5";
import { FaGripfire } from "react-icons/fa";
import style from "./Header.module.sass";
function Header() {
  return (
    <div>
      <Navbar className={style.Header} fluid rounded>
        <div className="flex gap-5 md:order-2">
          <Button className="h-8  justify-between flex  items-center ">
            <FaGripfire className="h-6 w-6 " />
          </Button>
          <span>SOLDIER</span>
        </div>
        <div className="flex gap-5 md:order-2">
          <Button className="h-8  justify-between flex  items-center ">
            <span>99</span>
            <IoIosFlash className="h-6 w-6 " />
          </Button>
          <Button className="h-8 w-8 flex justify-center items-center rounded-full">
            <IoIosSettings className="h-6 w-6 " />
          </Button>
          <Button className="h-8 w-8 flex justify-center items-center rounded-full">
            <IoReturnDownBack className="h-6 w-6 " />
          </Button>
          <Button className="h-8 w-8 flex justify-center items-center rounded-full">
            <IoReturnUpForward className="h-6 w-6 " />
          </Button>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
