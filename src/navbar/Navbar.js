
import React from "react";
import Button from'../coolbutton/CoolButton.js'
function Header(){
    return(
        <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" hreg='#'>
                        Home
                    </a>
                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                {/* <Button/> */}
                    <div className="buttons">
                        <a className="button is-primary">
                            <Button is-primary text='Sign up'/>
                        </a>
                        <a className="button is-light">
                            <Button is-primary text='Log in'/>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Header