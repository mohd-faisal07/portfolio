function ProjectList(props) {
  console.log(props);
  return (
    <div className="flex flex-row border border-black rounded-md p-2 mt-2">
      <div className=" w-[80%]">
        <p>{props.props.Name}</p>
        <p className="border border-b-2 border-black"></p>
        <p>
          Discription:<br></br>
          {props.props.description}
        </p>
        <button className="p-2 rounded-md bg-slate-700 text-blue-300 border border-black mr-2">
          Source Code
        </button>
        <button className="p-2 rounded-md bg-slate-700 text-blue-300 border border-black">
          Live Demo
        </button>
      </div>
      <div className="w-[20%]">
        <p>img</p>
      </div>
    </div>
  );
}

export default ProjectList;
