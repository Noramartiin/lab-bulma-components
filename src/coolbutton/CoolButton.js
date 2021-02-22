import React, { Component } from "react";

function Button(props) {
  return (
    //   <div>
    // 	<button className="button is-rounded my-class is-danger is-small">Log In</button>
    // 	<button className="button is-small is-success">Sign Up</button>
    //   </div>

    <a className={props.isSuccess ? "is-primary" : "is-danger"}>
      {this.props.text}
    </a>
  );
}

export default Button;
