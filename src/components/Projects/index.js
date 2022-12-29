import { useEffect, useState } from "react";
import * as Styled from "./style";
import dataProjects from "../../Data/projects.json";

import user from "../../assets/fotoPerfil.jpeg";
import arrow from "../../assets/icons/arrow.svg";

export default function Projects() {
  const [saveData, setSaveData] = useState([]);

  const [optionFilter, setOptionFilter] = useState("");
  const [option, setOption] = useState(1);

  const [amountOfProjects, setAmountOfProjects] = useState(0);
  const [numberOfProjectlists, setNumberOfProjectlists] = useState([]);

  const [limit, setLimit] = useState([0, 2]);
  const [arrayDataProjects, setArrayDataProjects] = useState([]);

  useEffect(() => {
    amountProjects();
    changedProjects();
  }, [option, optionFilter, saveData]);

  useEffect(() => {
    handleSaveData();
  }, [optionFilter]);

  function handleSaveData() {
    var data = [];

    switch (optionFilter) {
      case "React": {
        for (let i = 0; i < dataProjects.projects.length; i++) {
          if (dataProjects.projects[i].subTag === "interactive") {
            data.push(dataProjects.projects[i]);
          }
        }
        break;
      }

      case "Responsivo": {
        for (let i = 0; i < dataProjects.projects.length; i++) {
          if (dataProjects.projects[i].subTag === "static") {
            data.push(dataProjects.projects[i]);
          }
        }
        break;
      }

      default: {
        for (let i = 0; i < dataProjects.projects.length; i++) {
          data.push(dataProjects.projects[i]);
        }
      }
    }

    setSaveData(data);
    setAmountOfProjects(data.length);
  }

  function changedProjects() {
    var arrayData = [];
    for (let i = option * 3 - 1 - 2; i <= option * 3 - 1; i++) {
      if (saveData[i] !== undefined) {
        arrayData.push(saveData[i]);
      }
    }
    setArrayDataProjects(arrayData);
  }

  function amountProjects() {
    const amount = Math.ceil(saveData.length / 3);
    let currentAMount = amount + 1;
    let cont = [];
    for (let i = 1; i <= amount; i++) {
      currentAMount--;
      cont.push(currentAMount);
    }
    setNumberOfProjectlists(cont.sort());
  }

  function handleOptionFiltering(option) {
    setOptionFilter(option);
  }

  function handlePagination(optionData) {
    setOption(optionData);
  }

  function handleTogglePagination(toggle) {
    if (
      numberOfProjectlists[numberOfProjectlists.length - 1] > option &&
      toggle === "next"
    ) {
      setOption((p) => p + 1);
    }
    if (option !== 1 && toggle === "previous") {
      setOption((p) => p - 1);
    }
  }

  return (
    <Styled.Container className="center">
      <Styled.filtering className="box">
        <h1>Projetos ({amountOfProjects})</h1>
        <Styled.ListOptinsFiltering>
          <Styled.Option
            toggle={optionFilter === ""}
            onClick={() => handleOptionFiltering("")}
          >
            Todos
          </Styled.Option>
          <Styled.Option
            toggle={optionFilter === "React"}
            onClick={() => handleOptionFiltering("React")}
          >
            React
          </Styled.Option>
          <Styled.Option
            toggle={optionFilter === "Responsivo"}
            onClick={() => handleOptionFiltering("Responsivo")}
          >
            Responsivo
          </Styled.Option>
        </Styled.ListOptinsFiltering>
      </Styled.filtering>

      <Styled.ContainerListProjects>
        {arrayDataProjects.length > 0 &&
          arrayDataProjects.map((resp) => (
            <Styled.Project key={resp.title} className="box">

              <Styled.ImgProj 
                srcDesktop={resp.imgProjDesktop}
                srcMobile={resp.imgProjMobile} 
              />


              <Styled.InfoProject>
                <div>{resp.tags.join(" ")}</div>
                <h1>{resp.title}</h1>
                <p>{resp.description}</p>

                <Styled.ContainerButton>
                  <Styled.Button
                    href={resp.demo}
                    target="_blank"
                    bgColor={"#2f80ed"}
                    ftColor={"white"}
                  >
                    Demo
                  </Styled.Button>
                  <Styled.Button
                    href={resp.github}
                    target="_blank"
                    bgColor={"white"}
                    ftColor={"#2f80ed"}
                  >
                    Code
                  </Styled.Button>
                </Styled.ContainerButton>
              </Styled.InfoProject>
            </Styled.Project>
          ))}
      </Styled.ContainerListProjects>

      {numberOfProjectlists.length > 1 && (
        <Styled.ContainerListing>
          <Styled.arrow
            rotate={180}
            onClick={() => handleTogglePagination("previous")}
          >
            <img src={arrow} alt="botão para paginação" />
          </Styled.arrow>

          {numberOfProjectlists.map((count) => (
            <Styled.option
              key={count}
              selected={option === count}
              onClick={() => handlePagination(count)}
            >
              {count}
            </Styled.option>
          ))}

          <Styled.arrow
            rotate={0}
            onClick={() => handleTogglePagination("next")}
          >
            <img src={arrow} alt="botão para paginação" />
          </Styled.arrow>
        </Styled.ContainerListing>
      )}
    </Styled.Container>
  );
}
