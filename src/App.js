


import React, { Component } from 'react';
import './css/index.css';
import Main from './Main.js';
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx'


class App extends Component {
  render() {
    return (



     <BrowserRouter>
      <div>
      <header className="App-header">
      
      <Navbar position ="absolute"/>
     
      </header>

        {/* <Main/> */}
        <div className="content">
          <Switch>
          <Route path="/about" component={About}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/" component={Main}/></Switch>
        </div> 
        
 <footer className="footer">
        
     <h1>Check out the
       <a
         target="_blank"
         rel="noreferrer noopener" href="https://github.com/xxsherryyy/sherry-x-yang"
       > source code
       </a>!
     </h1>
   
<div>
     <a
       target="_blank"
       
     > Sherry X Yang © 2018
       
     </a>
   </div>
 </footer>
      </div>
 </BrowserRouter>


  ) 
   
  }
}

// const menuBtn = document.querySelector('.menu-btn');
// const menu = document.querySelector('.menu');
// const menuNav = document.querySelector('.menu-nav');
// const menuBranding = document.querySelector('.menu-branding');
// const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
// let showMenu = false;






export default App;
