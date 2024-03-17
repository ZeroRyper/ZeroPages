function FormProject({ handleChangeProject,handleFileChange }) {
  return (
    <form>
      <label htmlFor="">Title</label>
      <input
        type="text"
        className="border-black border-2"
        name="title"
        onChange={handleChangeProject}
      />
      <label htmlFor="">First Imagen</label>
      <input type="file" name="firstImg" onChange={handleFileChange} required="required" />
      <label htmlFor="">Second Imagen</label>
      <input type="file" name="secImg" onChange={handleFileChange} required="required" />
      <label htmlFor="">Direccion del sitio web</label>
      <input
        type="text"
        className="border-black border-2"
        name="hrefWeb"
        onChange={handleChangeProject}
        required="required"
      />
    </form>
  );
}

export default FormProject;
