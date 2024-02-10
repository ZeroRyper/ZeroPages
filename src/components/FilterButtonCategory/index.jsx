import PropTypes from 'prop-types';

function ButtonCategory({title,setCategoryIn}) {
  ButtonCategory.propTypes = {
    title: PropTypes.string.isRequired,
    setCategoryIn: PropTypes.func.isRequired,
  };
  return (
    <li
    className="btn bg-[#00ccff9d] text-black w-32 text-center mx-2 py-1 xl:text-2xl sm:text-lg cursor-pointer font-protest"
    onClick={() => setCategoryIn(title)}
  >
    {title}
  </li>
  )
}

export default ButtonCategory