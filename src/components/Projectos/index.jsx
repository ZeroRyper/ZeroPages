import "./Projects.css";
import ListProjects from "../ListProjects";
import { useState } from "react";
import ButtonTools from "../FilterButtonTools";
import ButtonCategory from "../FilterButtonCategory";

function Projects() {
  const projectos = [
    {
      category: ["Front End", "HTML", "JAVASCRIPT", "CSS", "SASS"],
      firstImg: "../1/firstImg.png",
      secImg: "../1/secImg.jpg",
      tools: ["HTML", "JS", "CSS", "SASS"],
      hrefWeb: "https://zeroryper.github.io/Ableton_Bocchi/",
      id: 1,
    },
    {
      category: ["Front End", "REACT", "CSS", "HTML", "JAVASCRIPT"],
      firstImg: "../2/firstImg.png",
      secImg: "../2/secImg.png",
      tools: ["REACT", "CSS", "HTML", "JS"],
      hrefWeb: "https://zeroryper.github.io/org/",
      id: 2,
    },
    {
      category: [
        "Front End",
        "REACT",
        "CSS",
        "HTML",
        "JAVASCRIPT",
        "TAILWINDCSS",
      ],
      firstImg: "../3/firstImg.png",
      secImg:
        "https://help.nflxext.com/43e0db2f-fea0-4308-bfb9-09f2a88f6ee4_what_is_netflix_1_en.png",
      tools: ["REACT", "CSS", "HTML", "JS", "TAILWINDCSS"],
      hrefWeb: "https://zeroryper.github.io/react-challenge-alura/",
      id: 3,
    },
    {
      category: ["Front End", "HTML", "JAVASCRIPT", "CSS", "SASS"],
      firstImg:
        "https://github.com/ZeroRyper/Challenge-Oracle-ONE-Encriptador/blob/master/assets/Screenshot.png?raw=true",
      secImg:
        "https://kinsta.com/wp-content/uploads/2023/07/what-is-encryption.jpg",
      tools: ["HTML", "JS", "CSS", "SASS"],
      hrefWeb: "https://zeroryper.github.io/Challenge-Oracle-ONE-Encriptador/",
      id: 4,
    },
    {
      category: ["Front End", "REACT", "HTML", "CSS", "JAVASCRIPT"],
      firstImg: "../4/firstImg.png",
      secImg:
        "https://www.cnet.com/personal-finance/assets/uploads/resize/1149dab9bcfeb6dfe75fc2f7df9ac3db6be6b7a3/m1/2023/06/OnlineBankingGettyImages01-scaled.jpg?auto=webp",
      tools: ["REACT", "HTML", "CSS", "JS"],
      hrefWeb: "https://zeroryper.github.io/smartbank/build/",
      id: 5,
    },
  ];
  const tools = ["REACT", "JAVASCRIPT", "HTML", "CSS", "SASS", "TAILWINDCSS"];
  const category = ["Front End", "Back End", "Animation", "Games", "Art"];
  const [categoryIn, setCategoryIn] = useState("");
  return (
    <section className="" id="projects">
      <div className="grid grid-cols-1 gap-20">
        <h2 className="text-center text-white text-9xl font-bills">PROJECTS</h2>
        <div className="grid grid-cols-1 gap-10">
          <ul className="flex justify-center w-full">
            {category.map((item, key) => (
              <ButtonCategory
                title={item}
                key={key}
                setCategoryIn={setCategoryIn}
              />
            ))}
          </ul>
          <ul className="flex justify-center w-full">
            {tools.map((element, key) => (
              <ButtonTools
                key={key}
                title={element}
                setCategoryIn={setCategoryIn}
              />
            ))}
          </ul>
          <div className="flex justify-center">
            <ul className="grid lg:gap-20 md:gap-5 lg:grid-cols-3 md:grid-cols-2">
              {projectos.map((projectos) =>
                categoryIn == "" ? (
                  <ListProjects
                    firstImg={projectos.firstImg}
                    tools={projectos.tools}
                    secImg={projectos.secImg}
                    hrefWeb={projectos.hrefWeb}
                    key={projectos.id}
                  />
                ) : (
                  projectos.category.map(
                    (category) =>
                      categoryIn == category && (
                        <ListProjects
                          firstImg={projectos.firstImg}
                          tools={projectos.tools}
                          secImg={projectos.secImg}
                          hrefWeb={projectos.hrefWeb}
                          key={projectos.id}
                        />
                      )
                  )
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
