import { React } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaHospitalAlt } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="fixed w-full flex justify-between items-center p-4">
      <div className="">
        <h1>
          <Link to={"/"}>Life-Blood</Link>
        </h1>
      </div>
      <nav>
        <ul className="flex gap-10 p-6 bg-black/50 text-white rounded-3xl md:text-2xl">
          <li>
            <Link to={"/hospital"}>
              <FaHospitalAlt />
            </Link>
          </li>
          <li>
            <Link to={"/blood_bank"}>
              <RiBankFill />
            </Link>
          </li>
          <li>
            <Link to={"/donor"}>
              <AiOutlineUser />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
