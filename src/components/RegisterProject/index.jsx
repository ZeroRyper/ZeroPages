import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FormDetails from "./FormDetails";
import FormToolsCategory from "./FormToolsCategory";
import FormProject from "./FormProject";

function RegisterProject() {
  const projectID = uuidv4();
  const [project, setProject] = useState({
    id: projectID,
    title: "",
    firstImg: "",
    secImg: "",
    hrefWeb: "",
  });
  const [details, setDetails] = useState({
    id_project: projectID,
    id_tools: [],
    id_category: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/registerP/projects", {
        method: "POST",
        body: JSON.stringify(project),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      console.log(data); // Log data from the first fetch

      console.log("Details registration successful"); // Or handle the response from the second fetch
    } catch (error) {
      console.error("Error:", error);
    }
    try {
      const response = await fetch("http://localhost:4000/registerP/details", {
        method: "POST",
        body: JSON.stringify(details),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      console.log(data); // Log data from the first fetch

      console.log("Details registration successful"); // Or handle the response from the second fetch
    } catch (error) {
      console.error("Error:", error);
    }
  };
  console.log(project, details);
  const handleChangeProject = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleChangeDetails = (e) => {
    const { value, name, checked } = e.target; // Extract name and checked state
    const valueInt = parseInt(value);
    let delElem = details.id_tools.indexOf(valueInt);
    console.log(delElem);
    if (checked) {
      setDetails({
        ...details,
        [name]: [...details[name], valueInt],
      });
    } else if (name == "id_category") {
      setDetails({ ...details, [name]: valueInt });
    } else {
      setDetails((details) => ({
        ...details,
        id_tools: details.id_tools.filter((tool) => tool !== details.id_tools[delElem]),
      }));
    }
  };
  return (
    <section className=" bg-white grid grid-cols- gap-4 w-8/12 mx-auto">
      <form
        onSubmit={handleSubmit}
        className=" grid grid-cols-1 justify-items-center"
      >
        <FormProject handleChangeProject={handleChangeProject} />
        <FormDetails handleChangeDetails={handleChangeDetails} />
        <button onClick={() => window.location.reload()} type="submit">Guardar</button>
      </form>
      <FormToolsCategory />
    </section>
  );
}

export default RegisterProject;
