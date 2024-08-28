import Button from "./components/Button";
import { proj } from "./App";
import ProjectList from "./components/ProjectList";
function Projects() {
  console.log(proj);
  return (
    <div>
      <div>
        <div>
          <h2>test</h2>
          <p>about the project</p>
          <Button styles="text-red">click</Button>
          {proj.map((project) => (
            <ProjectList props={project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
