import copy from "copy-to-clipboard";

import * as Styled from "./style";
import profilePicture from "../../assets/fotoPerfil.jpeg";

import imgEmail from "../../assets/icons/email.svg";
import imgPhone from "../../assets/icons/phone.svg";
import SpeechBubble from "../SpeechBubble";

import iconGithub from "../../assets/icons/github.svg";
import iconLinkedin from "../../assets/icons/linkedin.svg";

export default function InformationAboutMe() {
  function handleCopy(text) {
    copy(text);
  }

  return (
    <Styled.Container className="box center">
      <Styled.ContainerContentToggle>
        <Styled.ImgProfilePicture src={profilePicture} alt="foto de perfil" />
        <Styled.contentToggle>
          <p>
            Sou um desenvolvedor frontend web, ainda começando minha jornada na
            área, estou disposto a aprender novas tecnologias pra evoluir cada
            vez mais na área.
          </p>
          <br />
          <p>
            {" "}
            “Não é a linguagem de programação que define o programador, mas sim
            sua lógica.” – David Ribeiro Guilherme.
          </p>
        </Styled.contentToggle>
      </Styled.ContainerContentToggle>

      <Styled.ContainerInfo>
        <Styled.HeaderInfo>
          <div>
            <h1>Gustavo Teles</h1>
            <p>Desenvolvedor Frontend</p>
          </div>

          <Styled.ContactInformation>
            <div onClick={() => handleCopy("gustavo.teles711@gmail.com")}>
              <img src={imgEmail} alt="logo de email" />
              <p>gustavo.teles711@gmail.com</p>

              <SpeechBubble
                onClick={() => handleCopy("gustavo.teles711@gmail.com")}
              >
                Copiar
              </SpeechBubble>
            </div>
            <div onClick={() => handleCopy("(11) 9 7110 - 8786")}>
              <img src={imgPhone} alt="logo de telefone" />

              <p>(11) 9 7110 - 8786</p>

              <SpeechBubble onClick={() => handleCopy("(11) 9 7110 - 8786")}>
                Copiar
              </SpeechBubble>
            </div>
          </Styled.ContactInformation>
        </Styled.HeaderInfo>

        <Styled.Content>
          <p>
            Sou um desenvolvedor frontend web, ainda começando minha jornada na
            área, estou disposto a aprender novas tecnologias pra evoluir cada
            vez mais na área.
          </p>
          <br />
          <p>
            {" "}
            “Não é a linguagem de programação que define o programador, mas sim
            sua lógica.” – David Ribeiro Guilherme.
          </p>
        </Styled.Content>

        <Styled.SocialMedia>
          <a href="https://www.linkedin.com/in/gustavo-teles-270a711a7/" target="_blank">
            <img src={iconLinkedin} />
          </a>
          <a href="https://github.com/Telesgusouza" target="_blank">
            <img src={iconGithub} />
          </a>
        </Styled.SocialMedia>
      </Styled.ContainerInfo>
    </Styled.Container>
  );
}
