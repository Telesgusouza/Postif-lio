import * as Styled from "./style";

import data from "../../Data/hobbies.json";

export default function Hobbies() {

  return (
    <Styled.Container className="box">
      <h1>Hobbies</h1>

      <Styled.ContainerHobbies>
        {data.map((resp) => (
          <Styled.Hobbie key={resp.title} >
            <img src={resp.imgUrl} alt="ilustração de hobbie" />
            <h2>{resp.title}</h2>
            <p>{resp.content}</p>
          </Styled.Hobbie>
        ))}
      </Styled.ContainerHobbies>
    </Styled.Container>
  );
}
