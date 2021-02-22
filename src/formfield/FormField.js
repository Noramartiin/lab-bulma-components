import React from "react";

function Login(props){
    return (
      <div>
        <label className="label">{props.label}</label>
        <div>
          <input
            type="text"
            className={props.input}
            placeholder={props.placeholder}
          />
        </div>
      </div>
    );
}
export default Login;
