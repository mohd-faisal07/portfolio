// import { Outlet, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import SelfIntro from "./components/SelfIntro";
// import SkillsLists from "./components/SkillsLists";
// import Projects from "./Projects";
// import Home from "./Home";
// import Resume from "./Resume";

function AppLayout() {
  return (
    <div className="flex flex-row p-4 justify-end h-[95svh] w-[100vw] ">
      <div className="w-[30%]">
        <SelfIntro />
      </div>
      <div className="flex flex-col  border border-black rounded-md p-3 h-[95vh] w-[100%] shadow-lg shadow-slate-800/90">
        <NavBar />
      </div>
    </div>
  );
}

export default AppLayout;
