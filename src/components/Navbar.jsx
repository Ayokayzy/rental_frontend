import { Link } from "react-router-dom";
import "../App.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import { getUserById } from "../../Apis/getUser";
import { useSelector } from "react-redux";

function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  const { user } = useSelector((s) => s);
  const handleIsMenuOpen = () => {
    setIsMenu(true);
  };
  const handleIsMenuClose = () => {
    setIsMenu(false);
  };
  return (
    <header className="min-h-[57px] w-full sticky bg-white shadow-md top-0 flex justify-between items-center p-2 z-[100]">
      <nav className="w-[90%] m-auto flex justify-between items-center">
        <Link to={"/"} className="logo flex items-center">
          <img src="/images/EzClickLogo1.png" className="h-12" />
        </Link>

        <ul
          className={`nav-ul w-1/3 flex justify-around items-center  ${
            isMenu ? "nav-ac" : ""
          }`}
        >
          <div className="cls-bx " onClick={handleIsMenuClose}>
            <IoIosCloseCircleOutline />
          </div>
          <li>
            <Link to={"/"} onClick={handleIsMenuClose}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/properties"} onClick={handleIsMenuClose}>
              Properties
            </Link>
          </li>
          {/* <li>
            <Link to={"/listp"} onClick={handleIsMenuClose}>
              List a place
            </Link>
          </li> */}
          <li>
            <Link to={"/contact"} onClick={handleIsMenuClose}>
              Contact
            </Link>
          </li>
          <li>
            <Link to={"/all-blog"} onClick={handleIsMenuClose}>
              Blog
            </Link>
          </li>
        </ul>
        {/* <MenuModal /> */}
        <div className="flex items-center gap-2 border rounded-full py-2 px-4 border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 cursor-pointer menu-v"
            onClick={handleIsMenuOpen}
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
          <Link
            to={
              user?.isAuth ? (user.role === "user" ? "/" : "/dash") : "/login"
            }
            className="bg-primary_pink text-white rounded-full border border-primary_pink"
          >
            {user?.user?.profile_picture ? (
              <img
                src={user?.user?.profile_picture}
                alt=""
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
