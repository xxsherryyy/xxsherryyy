
// import { Link } from 'react-router-dom';

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
import { NavLink } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';



const styles = {
  navBar: {
    color: "#444",
    flexGrow: 1,
    zIndex: 10,
    margin: -25,
    // borderStyle: 'solid',
    // borderWidth: 10,
    padding: 5,
    // borderColor: "#ffff",
    elevation: 50,
    boxshadow: 100,     
    opacity: 1,
    justifyContent: 'flex-end',
flex: 1
  },

  toolbarButtons: {
    marginLeft: 'auto',
  },
 
  tool: {

    marginLeft: 'auto'

  },
  tab: {
    color: "#1B94A1",
    background: "#1B94A1, #E89984",
    marginLeft: 20,
    marginRight: 20,
    
    textShadow: 4,



    justifyContent: 'flex-end',
    // alignItems: 'center',
  },
};

function Navbar(props) {
  const { classes } = props;
  return (
    <div className={classes.navBar}>
      <AppBar className={classes.menuButton}
        style={{ position: "static", backgroundColor: '#212121' }} >
        <Toolbar >

          <IconButton >
            <a className="nav-link" href="/home"> Sherry<span class="text-secondary">X</span>Yang <span className="sr-only"></span></a>
          </IconButton>
        
          <ul className={classes.tool}>

            <IconButton className={classes.tab}><a href="/about"> About</a></IconButton>
            <IconButton className={classes.tab} ><a className="nav-link" href="/portfolio">Portfolio</a></IconButton>
            <NavLink to="/contact"><IconButton className={classes.tab} ><a className="nav-link" href="/contact">Contact</a></IconButton></NavLink>
          </ul>

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(Navbar);
