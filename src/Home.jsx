import { Outlet } from "react-router";
import SelfIntro from "./components/SelfIntro";

function Home() {
  return (
    <div>
      <h2>Summary</h2>
      <h3 className="border-2 border-t-2 border-black mt-2"></h3>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        explicabo est eaque voluptatem, odit ab. Ipsum tempora suscipit placeat
        quo aliquam aut voluptates molestiae impedit, excepturi facilis esse,
        officia nesciunt.
      </p>
    </div>
  );
}

export default Home;
