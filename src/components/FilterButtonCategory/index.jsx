import PropTypes from 'prop-types';
import "./FilterCategory.css"
function ButtonCategory({title,setCategoryIn}) {
  ButtonCategory.propTypes = {
    title: PropTypes.string.isRequired,
    setCategoryIn: PropTypes.func.isRequired,
  };
  return (
    <li
    className="btn bg-[#2e207e] text-[#5ce5b7] w-32 text-center mx-2 py-1 xl:text-lg sm:text-base cursor-pointer font-protest"
    onClick={() => setCategoryIn(title)}
  >
    {title}
  </li>
  )
}

export default ButtonCategory