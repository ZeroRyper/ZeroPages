
function Category({handleChangeDetails}) {
  return (
    <div className="grid grid-cols-1">
      <label htmlFor="">Category</label>
      <select name="id_category" onChange={handleChangeDetails} id="">
        <option value={1}>Hola</option>
        <option value={2}>Hola2</option>
      </select>
    </div>
  );
}

export default Category;
