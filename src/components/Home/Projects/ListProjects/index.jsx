import { useState } from "react";
import PropTypes from 'prop-types';
import "./ListProjects.css";

function ListProjects({  firstImg, toolsDetail, id, secImg, hrefWeb }) {
  const [imgStatus, setImgStatus] = useState("h-0");
  const [toolStatus, setToolStatus] = useState("opacity-0");
  ListProjects.propTypes = {
    firstImg: PropTypes.object.isRequired,
    secImg: PropTypes.object.isRequired,
    toolsDetail: PropTypes.array.isRequired,
    hrefWeb: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired

  };
  return (
    <div>
{ 
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
    id={id}
  >
    <img
      className={`fade rounded-2xl ${imgStatus}`}
      src={secImg}
      alt=""
    />
    <ul
      className={`absolute w-full h-full flex justify-around items-center px-20`}
    >
     {toolsDetail.map((tools, key) => (
      tools.id_project == id && (
        <li
          key={key}
          className={`bg-[#122d42] text-[#3cd8dd] rounded-xl mx-0.5  ${toolStatus}`}
        >
          {tools.toolsnames}
        </li>
      )
      ))} 
    </ul>

    <img className="lg:w-[20rem] md:w-[20rem] lg:h-[20rem] md:h-[20rem] rounded-2xl" src={firstImg} alt="" />
  </a>
</li>
}
      
    </div>
  );
}

export default ListProjects;
