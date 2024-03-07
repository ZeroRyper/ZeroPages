import { useState } from "react";
import PropTypes from 'prop-types';
import "./ListProjects.css";

function ListProjects({  firstImg, tools, key, secImg, hrefWeb }) {
  const [imgStatus, setImgStatus] = useState("h-0");
  const [toolStatus, setToolStatus] = useState("opacity-0");
  ListProjects.propTypes = {
    firstImg: PropTypes.string.isRequired, // Optional
    tools: PropTypes.arrayOf(PropTypes.string).isRequired, // Optional array of strings
    key: PropTypes.number.isRequired,
    secImg: PropTypes.string.isRequired, // Optional
    hrefWeb: PropTypes.string.isRequired,
  };
  return (
    <div>
      <li className="relative ">
        <a
          href={hrefWeb}
          onMouseEnter={() => {
            setImgStatus("h-[20rem]");
            setToolStatus("tool opacity-100");
          }}
          onMouseLeave={() => {
            setImgStatus("h-0");
            setToolStatus("opacity-0");
          }}
          className="w-auto"
          id={key}
        >
          <img
            className={`fade rounded-2xl ${imgStatus}`}
            src={secImg}
            alt=""
          />
          <ul
            className={`absolute w-full h-full flex justify-around items-center px-20`}
          >
            {tools.map((tools, key) => (
              <li
                key={key}
                className={`bg-[#122d42] text-[#3cd8dd] rounded-xl mx-0.5  ${toolStatus}`}
              >
                {tools}
              </li>
            ))}
          </ul>

          <img className="lg:w-[20rem] md:w-[20rem] lg:h-[20rem] md:h-[20rem] rounded-2xl" src={firstImg} alt="" />
        </a>
      </li>
    </div>
  );
}

export default ListProjects;
