import Hobbies from "../components/Hobbies";
import InformationAboutMe from "../components/InformationAboutMe";
import Projects from "../components/Projects";
import Skill from "../components/Skill";
import * as Styled from "./style.js";

function App() {
  return (
    <Styled.Container>
      <InformationAboutMe />

      <Styled.ContainerContent>
        <div>
          <Skill />
          <Hobbies />
        </div>

        <Projects />
      </Styled.ContainerContent>
    </Styled.Container>
  );
}

export default App;
