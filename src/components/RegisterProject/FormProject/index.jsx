function FormProject({ handleChangeProject }) {
  return (
    <div>
      <label htmlFor="">Title</label>
      <input
        type="text"
        className="border-black border-2"
        name="title"
        onChange={handleChangeProject}
      />
      <label htmlFor="">First Imagen</label>
      <input type="file" name="firstImg" onChange={handleChangeProject} />
      <label htmlFor="">Second Imagen</label>
      <input type="file" name="secImg" onChange={handleChangeProject} />
      <label htmlFor="">Direccion del sitio web</label>
      <input
        type="text"
        className="border-black border-2"
        name="hrefWeb"
        onChange={handleChangeProject}
      />
    </div>
  );
}

export default FormProject;
