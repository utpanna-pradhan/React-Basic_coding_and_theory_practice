import React from "react";
import { useState } from "react";

function CheckBoxList() {
  const allskills = ["HTML", "CSS", "JS"];
  const [selectedSkills, setselectedSkills] = useState([]);
  function handleChange(e) {
    const skillvalue = e.target.value;
    if (e.target.checked) {
      setselectedSkills([...selectedSkills, skillvalue]);
    } else {
      selectedSkills(selectedSkills.filter((skill) => skill != skillvalue));
    }
  }
  return (
    <div>
      <h3>Select your skills :</h3>
      {allskills.map((skill) => (
        <label key={skill}> 
          <input
            value={skill}
            type="checkbox"
            onChange={handleChange}
            checked={selectedSkills.includes(skill)}
          />
          { skill } 
        </label>
      ))}
      <h3>Selected Skills :</h3>
      <p>{selectedSkills.join(" , ")}</p>
    </div>
  );
}

export default CheckBoxList;
