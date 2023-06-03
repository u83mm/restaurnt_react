import React from 'react';
import Header from './components/page_components/header';
import Main from './components/page_components/main';
import Footer from "./components/page_components/footer";

function App() {
  const nav_links = {
      "Home"		    :	"/",
      "Menu"		    : "/menu/menu.js",
      "Registration": "/register.js",				
      "Login"		    : "/login.js",
  } 

  const links = Object.entries(nav_links).map(([label, link]) => (  
      <li className="nav-item d-lg-inline-block" key={label}><a className="nav-link" href={ link }>{ label }</a></li>
  )); 
   
  return (
    <div className="App">
      <Header />
      <Main links = { links } />      
      <Footer />
    </div>
  );
}

export default App;
