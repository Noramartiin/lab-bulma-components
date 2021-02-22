import React from 'react';
import "bulma/css/bulma.css";
import Header from './navbar/Navbar.js'
import Login from './formfield/FormField.js'
import Button from './coolbutton/CoolButton.js'

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Login label="Name" type="text" placeholder="e.g. Alex Smith" />
      <Login
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <Button isSucess/>
    </React.Fragment>
  );
};

export default App;
