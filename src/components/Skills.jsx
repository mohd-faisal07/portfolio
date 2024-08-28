export default function Skills(skillobj) {
  console.log(skillobj);
  return (
    <li className="flex justify-center items-center gap-4">
      <img
        src={skillobj.skillobj.logo}
        alt="skillImg"
        className="max-w-[8rem]"
      />
      <div className="">
        <p className="text-2xl font-bold">{skillobj.skillobj.Name}</p>
        <p className="flex flex-row-reverse justify-center items-center gap-2 text-xl font-semibold">
          {skillobj.skillobj.rating}
          <span>
            <img src="img/star.png" alt="star" className=" w-[24px] h-24px] " />
          </span>
        </p>
      </div>
    </li>
  );
}
