import "./Projects.css";
import ListProjects from "../Projects/ListProjects";
import { useState, useEffect } from "react";
import ButtonTools from "../Projects/ListProjects/FilterButtonTools";
import ButtonCategory from "../Projects/ListProjects/FilterButtonCategory";

function Projects() {
  const [categoryIn, setCategoryIn] = useState("");

  const [categories, setCategory] = useState([]);
  const [tools, setTool] = useState([]);
  const [projects, setProject] = useState([]);
  const [toolsDetail, setToolsDetail] = useState([]);

  const loadProjectList = async () => {
    const response = await fetch("http://localhost:4000/getProjects");
    const data = await response.json();
    setProject(data);
    const response2 = await fetch("http://localhost:4000/getCategories");
    const data2 = await response2.json();
    setCategory(data2);

    const response3 = await fetch("http://localhost:4000/getTools");
    const data3 = await response3.json();
    setTool(data3);
    
    const response4 = await fetch("http://localhost:4000/getDetailsTools");
    const data4 = await response4.json();
    setToolsDetail(data4);
  };
  const uniqueData = new Set(projects.map((obj) => obj.id));
  // Convert the Set back to an array if needed
  const uniqueDataArray = [...uniqueData].map((id) =>
    projects.find((obj) => obj.id === id)
  );
  
  useEffect(() => {
    loadProjectList();
  }, []);

  return (
    <section className="" id="projects">
      <div className="grid grid-cols-1 gap-20">
        <h2 className="text-center text-white text-9xl font-bills">PROJECTS</h2>
        <div className="grid grid-cols-1 gap-10">
          <ul className="flex justify-center w-full">
            {categories.map((item, key) => (
              <ButtonCategory
                title={item.categorynames}
                key={key}
                setCategoryIn={setCategoryIn}
              />
            ))}
          </ul>
          <ul className="flex justify-center w-full">
            {tools.map((element, key) => (
              <ButtonTools
                key={key}
                title={element.toolsnames}
                setCategoryIn={setCategoryIn}
              />
            ))}
          </ul>
          <div className="flex justify-center lg:h-[700px] md:h-[600px]">
            <ul className="grid lg:gap-12 md:gap-5 lg:grid-cols-3 md:grid-cols-2">
              {categoryIn !== "" ? (
                  <>
                    {projects.map(
                      (project, key) =>
                        categoryIn === project.toolsnames && (
                          <ListProjects
                            firstImg={project.firsturlimg}
                            toolsDetail={toolsDetail}
                            secImg={project.securlimg}
                            hrefWeb={project.hrefweb}
                            key={key}
                            id={project.id}
                          />
                        )
                    )}
                    {uniqueDataArray.map((project, key) =>
                      categoryIn === project.categorynames && (
                        <ListProjects
                          firstImg={project.firsturlimg}
                          toolsDetail={toolsDetail}
                          secImg={project.securlimg}
                          hrefWeb={project.hrefweb}
                          key={key}
                          id={project.id}
                        />
                      ) 
                    )}

                  </>
                ) : (
                  <>
                    {uniqueDataArray.map((project, key) => (
                      <ListProjects
                        firstImg={project.firsturlimg}
                        toolsDetail={toolsDetail}
                        secImg={project.securlimg}
                        hrefWeb={project.hrefweb}
                        key={key}
                        id={project.id}
                      />
                    ))}
                  </>
                )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
