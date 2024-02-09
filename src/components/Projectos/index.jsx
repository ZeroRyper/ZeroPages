import "./Projects.css";
import ListProjects from "../ListProjects";
import { useState } from "react";
import ButtonTools from "../FilterButtonTools";
import ButtonCategory from "../FilterButtonCategory";

function Projects() {
  const projectos = [
    {
      category: ["Front End", "HTML", "JAVASCRIPT", "CSS", "SASS"],
      img: "https://github.com/ZeroRyper/Ableton_Bocchi/raw/main/assets/Screenshot_AB.png",
      secImg:
        "https://media.licdn.com/dms/image/sync/D5627AQEIa9T1t53Tbw/articleshare-shrink_1280_800/0/1706570312159?e=1708113600&v=beta&t=HslLfBGAm05-eeCWhaapr1CfTN5wLP13CTB8fc2wFgM",
      tools: ["HTML", "JS", "CSS", "SASS"],
      hrefWeb: "https://zeroryper.github.io/Ableton_Bocchi/",
      id: 1,
    },
    {
      category: ["Front End", "REACT", "CSS", "HTML", "JAVASCRIPT"],
      img: "https://media.licdn.com/dms/image/D562DAQFkZZXPUwEpIQ/profile-treasury-image-shrink_800_800/0/1697338418273?e=1707688800&v=beta&t=HU1QXKVKEFgRnmcAGvw-mlnOqbJmnkPm2S6jkGyDaM8",
      secImg:
        "https://raw.githubusercontent.com/ZeroRyper/org/master/src/componets/img/Screenshot_ORG.png",
      tools: ["REACT", "CSS", "HTML", "JS"],
      hrefWeb: "https://zeroryper.github.io/org/",
      id: 2,
    },
    {
      category: ["Front End", "REACT", "CSS", "HTML", "JAVASCRIPT", "TAILWINDCSS"],
      img: "https://media.licdn.com/dms/image/D562DAQGrOPX7r-Pdvg/profile-treasury-image-shrink_800_800/0/1697575576948?e=1707764400&v=beta&t=FH3S1txoX5aBo6EV8TE6lj7zkNTvpgb8OcOdFEPyjEs",
      secImg:
        "https://help.nflxext.com/43e0db2f-fea0-4308-bfb9-09f2a88f6ee4_what_is_netflix_1_en.png",
      tools: ["REACT", "CSS", "HTML", "JS", "TAILWINDCSS"],
      hrefWeb: "https://zeroryper.github.io/react-challenge-alura/",
      id: 3,
    },
    {
      category: ["Front End", "HTML", "JAVASCRIPT", "CSS", "SASS"],
      img: "https://github.com/ZeroRyper/Challenge-Oracle-ONE-Encriptador/blob/master/assets/Screenshot.png?raw=true",
      secImg:
        "https://kinsta.com/wp-content/uploads/2023/07/what-is-encryption.jpg",
      tools: ["HTML", "JS", "CSS", "SASS"],
      hrefWeb: "https://zeroryper.github.io/Challenge-Oracle-ONE-Encriptador/",
      id: 4,
    },
    {
      category: ["Front End", "REACT", "HTML", "CSS", "JAVASCRIPT"],
      img: "https://media.licdn.com/dms/image/D562DAQGoiE8XkpXp0Q/profile-treasury-image-shrink_800_800/0/1696634882652?e=1707764400&v=beta&t=-_RK6ZtcdiT1PHYT9SehqcHGkyOh1KO2yRVRirFKpwk",
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
    <section className="projects">
      <div className="bg-Projects h-[1800px] mt-16">
        <h2 className="text-center text-white text-9xl pt-20 font-bills">
          PROJECTS
        </h2>
        <div>
          <ul className="flex pt-10 justify-around mx-60">
            {category.map((item) => (
              <ButtonCategory 
              title={item}
              setCategoryIn={setCategoryIn}
              />
            ))}
          </ul>
          <ul className="flex pt-10 justify-around mx-96 ">
            {tools.map((element) => (
              <ButtonTools title={element} setCategoryIn={setCategoryIn} />
            ))}
          </ul>
        </div>
        <div className="flex justify-center mt-10">
          <ul className="grid gap-10 grid-cols-2">
            {projectos.map((projectos) =>
              categoryIn == "" ? (
                <ListProjects
                  img={projectos.img}
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
                        img={projectos.img}
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
    </section>
  );
}

export default Projects;
