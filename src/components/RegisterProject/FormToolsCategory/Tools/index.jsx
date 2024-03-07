import React, { useState, useRef, useEffect } from "react";
import "./ToolsForm.css"; // Import the CSS file

function Tools({ handleChangeDetails }) {
  const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown visibility
  const [selectedValues, setSelectedValues] = useState([]); // Array to store selected values
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

  useEffect(() => {
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
              <li onChange={handleCheckboxChange}>
                <input
                  id="HTML"
                  type="checkbox"
                  value={1}
                  name="id_tools"
                  onChange={handleChangeDetails}
                />
                <label htmlFor="folio">Html</label>
              </li>
              <li onChange={handleCheckboxChange}>
                <input
                  id="CSS"
                  type="checkbox"
                  value={2}
                  name="id_tools"
                  onChange={handleChangeDetails}
                />
                <label htmlFor="CSS">CSS</label>
              </li>
              <li onChange={handleCheckboxChange}>
                <input
                  id="SASS"
                  type="checkbox"
                  value={3}
                  name="id_tools"
                  onChange={handleChangeDetails}
                />
                <label htmlFor="SASS">SASS</label>
              </li>
              <li onChange={handleCheckboxChange}>
                <input
                  id="JAVASCRIPT"
                  type="checkbox"
                  value={4}
                  name="id_tools"
                  onChange={handleChangeDetails}
                />
                <label htmlFor="JAVASCRIPT">JAVASCRIPT</label>
              </li>
            </ul>
          </div>
        </dd>
      </dl>
    </div>
  );
}

export default Tools;
