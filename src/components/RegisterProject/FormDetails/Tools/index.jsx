import { useState, useRef, useEffect } from "react";
import "./ToolsForm.css"; 
import PropTypes from 'prop-types';


function Tools({ handleChangeDetails }) {
  Tools.propTypes = {
    handleChangeDetails: PropTypes.func,
  };
  const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown visibility
  const [selectedValues, setSelectedValues] = useState([]); // Array to store selected values
  const [tools, setTool] = useState([]);
  const dropdownRef = useRef(null); // Ref for the dropdown element

  const handleCheckboxChange = (event) => {
    const value = event.target.id;
    const updatedSelected = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];
    setSelectedValues(updatedSelected);
  };

  const handleDetailsClick = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };

  const handleOutsideClick = (event) => {
    if (!dropdownRef.current || dropdownRef.current.contains(event.target))
      return;
    // Close the dropdown when clicked outside
    setIsOpen(false);
  };

  const loadTools = async () => {
    const response = await fetch("http://localhost:4000/getTools");
    const data = await response.json();
    setTool(data);
  };
  useEffect(() => {
    loadTools();
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]); // Update listener only when isOpen changes

  const selectedItems = selectedValues.map((value) => (
    <span key={value} className="multiSel__item">
      {value}
    </span>
  ));

  return (
    <div className="dropdown" ref={dropdownRef}>
      <label htmlFor="">Tools</label>

      <dl>
        <dt onClick={handleDetailsClick}>
          <a href="#">
            <p className={`multiSel`}>
              {selectedValues[0] == undefined && <>Seleciona una tool</>}
              {selectedItems}
            </p>
          </a>
        </dt>
        <dd className={isOpen ? "" : "hidden"}>
          <div className="mutliSelect">
            <ul>
              {tools.map((tool, key) => (
                <li key={key} onChange={handleCheckboxChange}>
                  <input
                    id={tool.toolsnames}
                    type="checkbox"
                    value={tool.id}
                    name="id_tools"
                    onChange={handleChangeDetails}
                  />
                  <label htmlFor="folio">{tool.toolsnames}</label>
                </li>
              ))}
            </ul>
          </div>
        </dd>
      </dl>
    </div>
  );
}

export default Tools;
