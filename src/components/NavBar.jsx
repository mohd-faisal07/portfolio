import { Link, Navigate, Outlet } from "react-router-dom";
import NavItems from "./NavItems";
import SelfIntro from "./SelfIntro";
export default function NavBar() {
  return (
    <div className="flex flex-col h-[90vh] overflow-y-scroll">
      <nav>
        <ul className="flex flex-row gap-2 justify-end border sticky">
          <Link to="home">
            <li className="border-2 border-black p-2 rounded-lg ">About Me</li>
          </Link>
          <Link to="projects">
            <li className="border-2 border-black p-2 rounded-lg ">Projects</li>
          </Link>
          <Link to="skills">
            <li className="border-2 border-black p-2 rounded-lg  ">Skills</li>
          </Link>
          <Link to="resume">
            <li className="border-2 border-black p-2 rounded-lg mb-2">
              Resume
            </li>
          </Link>
          {/* <li className="border-2 border-black p-2 rounded-lg ">Contact Me</li> */}
          {/* <Outlet /> */}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
