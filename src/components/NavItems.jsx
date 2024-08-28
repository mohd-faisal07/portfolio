import { Outlet } from "react-router-dom";

function NavItems() {
  return (
    <div className="">
      <ul className="flex flex-row gap-2 justify-end border">
        <li className="border-2 border-black p-2 rounded-lg ">About Me</li>
        <li className="border-2 border-black p-2 rounded-lg ">Projects</li>
        <li className="border-2 border-black p-2 rounded-lg ">Skills</li>
        <li className="border-2 border-black p-2 rounded-lg ">Resume</li>
        <li className="border-2 border-black p-2 rounded-lg ">Contact Me</li>
      </ul>
    </div>
  );
}

export default NavItems;
