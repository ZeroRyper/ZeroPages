import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function Category({ handleChangeDetails }) {
  Category.propTypes = {
    handleChangeDetails: PropTypes.func,
  };

  const [categories, setCategory] = useState([]);
  const loadCategory = async () => {
    const response = await fetch("http://localhost:4000/getCategories");
    const data = await response.json();
    setCategory(data);
  };
  useEffect(() => {
    loadCategory();
  }, []);
  return (
    <div className="grid grid-cols-1">
      <label htmlFor="id_category">Category</label>
      <select name="id_category" onChange={handleChangeDetails} id="">
        {categories.map((category, key) => (
          <option key={key} value={category.id}>
            {category.categorynames}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Category;
