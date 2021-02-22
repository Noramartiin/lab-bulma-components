import React from "react";
import { render } from "react-dom";
import Header from "./navbar/Navbar.js";
import Login from "./formfield/FormField.js";
import Button from "./coolbutton/CoolButton.js";

function SignUp(){
    return(
        <div>
            <Header/>
            <Login/>
            <Button/>
        </div>
    )
}