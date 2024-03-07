import React, { useState } from 'react'

function FormToolsCategory() {
    const [detailsToCa, setDetailsToCa] = useState({
        //OJO
        toolsNames: "",
        categoryNames: "",
      });
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("http://localhost:4000/registerP/CategoryTools", {
            method: "POST",
            body: JSON.stringify(detailsToCa),
            headers: { "Content-Type": "application/json" },
          });
    
          const data = await response.json();
          console.log(data); // Log data from the first fetch
    
          console.log("Details registration successful"); // Or handle the response from the second fetch
        } catch (error) {
          console.error("Error:", error);
        }
      };
      const handleChange = (e) => {
        setDetailsToCa({ ...detailsToCa, [e.target.name]: e.target.value });
      };
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 justify-items-center">
    <label htmlFor="">New Tools</label>
    <input name='toolsNames' onChange={handleChange} type="text" className="border-black border-2" />
    <label htmlFor="">New Category</label>
    <input name='categoryNames' onChange={handleChange} type="text" className="border-black border-2" />
    <button type="submit">Guardar</button>

  </form>
  )
}

export default FormToolsCategory