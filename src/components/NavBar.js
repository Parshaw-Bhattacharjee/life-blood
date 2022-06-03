import { React } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaHospitalAlt } from "react-icons/fa";
import { RiBankFill, RiLogoutCircleRLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

const NavBar = () => {
  const navigate = useNavigate();
  const { user, logoutHandler } = useAuth();
  return (
    <div className="fixed top-0 left-0 right-0 w-full flex justify-between items-center p-4">
      <div className="">
        <img
          onClick={() => navigate("/")}
          className="h-20 rounded-lg cursor-pointer"
          src="https://res.cloudinary.com/donqbxlnc/image/upload/v1651724100/Life_Blood_tr_cropped_gvqcyj.png"
          alt=""
        />
      </div>
      <nav>
        <ul className="flex gap-8 p-4 bg-black/50 text-white rounded-3xl md:text-2xl">
          {user === null ? (
            <>
              <li title="hospital">
                <Link to={"/login/hospital"}>
                  <FaHospitalAlt />
                </Link>
              </li>
              <li title="blood bank">
                <Link to={"/login/bloodbank"}>
                  <RiBankFill />
                </Link>
              </li>
              <li title="donor">
                <Link to={"/login/donor"}>
                  <AiOutlineUser />
                </Link>
              </li>
            </>
          ) : (
            <li title="logout" className="cursor-pointer">
              <RiLogoutCircleRLine onClick={logoutHandler} />
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
