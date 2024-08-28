import Skills from "./Skills";
import { SkillData } from "../App.jsx";

export default function SkillsLists() {
  console.log(SkillData);
  return (
    <div className="border border-slate-900 rounded-md px-4 py-5 h-[100%]">
      <h2 className="text-gray-800 font-semibold text-center">SKILLS</h2>
      <ul className="grid grid-cols-4 gap-4 list-none">
        {SkillData.map((skills) => (
          <Skills skillobj={skills} key={SkillData.Name + SkillData.id} />
        ))}
      </ul>
    </div>
  );
}
