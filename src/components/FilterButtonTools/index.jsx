import PropTypes from "prop-types";

function ButtonTools({ title, setCategoryIn }) {
  ButtonTools.propTypes = {
    title: PropTypes.string.isRequired,
    setCategoryIn: PropTypes.func.isRequired,
  };
  return (
    <li
      className="flex justify-center items-center w-32 h-6 text-sm mx-2 p-2 cursor-pointer font-protest bg-[#1b5272] text-white"
      onClick={() => setCategoryIn(title)}
    >
      {title}
    </li>
  );
}

export default ButtonTools;
