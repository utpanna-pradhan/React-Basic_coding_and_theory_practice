import React from "react";

function Quest9(props) {
  return (
    <div>
      <p className="text-center text-danger fs-4">
        Create a component called Message that takes a boolean prop isLoggedIn
      </p>
      <div className="showmsg">
        <div >
          {props.status == "login" ? <h1>Welcome</h1> : <h1>Please login</h1>}
        </div>
      </div>
    </div>
  );
}

export default Quest9;
