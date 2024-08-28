import NavBar from "./components/NavBar";
import SkillsLists from "./components/SkillsLists";
import Skills from "./components/Skills";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./Home";
import Resume from "./Resume";
import Projects from "./Projects";

export const SkillData = [
  {
    id: 1,
    logo: "img/html.png",
    Name: "Html ",
    rating: 4.5,
  },
  {
    id: 2,
    logo: "img/css.png",
    Name: "CSS",
    rating: 4.5,
  },
  {
    id: 3,
    logo: "img/python.png",
    Name: "python",
    rating: 4.5,
  },
  {
    id: 4,
    logo: "img/python.png",
    Name: "Java",
    rating: 3.5,
  },
  {
    id: 5,
    logo: "img/python.png",
    Name: "C & C++",
    rating: 4,
  },
  {
    id: 6,
    logo: "img/python.png",
    Name: "MySQL",
    rating: 4,
  },
  {
    id: 7,
    logo: "img/python.png",
    Name: "JavaScript",
    rating: 3,
  },
  {
    id: 7,
    logo: "img/python.png",
    Name: "ReactJs",
    rating: 4,
  },
];

export const proj = [
  {
    id: 1,
    Name: "Omnifood",
    description: "some words of knowledge",
    source_link: "",
    demo_link: "",
    demo_img: "",
  },
  {
    id: 2,
    Name: "weathery",
    description: "the ultimate weather website!",
    source_link: "",
    demo_link: "",
    demo_img: "",
  },
];

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="resume" element={<Resume />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<SkillsLists />} />
          </Route>

          {/* <Route path="skills" element={<SkillsLists />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <SkillsLists /> */}
      {/* <SkillsLists SkillData={SkillData} /> */}
    </div>
  );
}
