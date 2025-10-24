import React, { useState } from "react";

function PrintName() {
  const [name, setName] = useState("");
  function handleonChammge(e) {
    console.log(e.target.value);

    setName(e.target.value);
  }

  return (
    <div className="bg-light border m-autp p-5 text-center d-flex flex-column justify-content-center align-items-center">
      <label htmlFor="inputName" className="m-4">
        Enter Your Name :
      </label>
      <input
        className="m-4"
        type="text"
        name="inputName"
        id="inputName"
        value={name}
        onChange={handleonChammge}
      />
      {name && <h2>Hello {name} !!!</h2>}
    </div>
  );
}

export default PrintName;
