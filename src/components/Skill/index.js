import SpeechBubble from "../SpeechBubble";
import * as Styled from "./style";

import data from "../../Data/skill.json";

export default function Skill() {
  return (
    <Styled.Container className="box">
      <h1>FRONT END</h1>

      {data.listSkill.map(resp => (
          <Styled.Skill key={resp.nameTec} >
            <p>{resp.nameTec}</p>
            <Styled.SkillBar level={resp.poncentAbi} />

            <SpeechBubble className="SpeechBubble">React</SpeechBubble>
          </Styled.Skill>
        )
      )}
    </Styled.Container>
  );
}
