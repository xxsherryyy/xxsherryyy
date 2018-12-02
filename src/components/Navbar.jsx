
// import { Link } from 'react-router-dom';

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
import { NavLink } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';



const styles = {
  navBar: {
    color: "#E46B5E",
    flexGrow: 1,
    zIndex: 10,
    margin: -20,
    borderStyle: 'solid',
    borderWidth: 10,
    padding: 5,
    borderColor: "#E46B5E",
    //  elevation: 50,
    //  boxshadow: 100     
    opacity: 1

  },


  menuButton: {
    zIndex: 4,
    color: "#E89984",
    opacity: 1

  },
  tool: {

    marginLeft: 650

  },
  tab: {
    color: "#1B94A1",
    background: "#1B94A1, #E89984",
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
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
        style={{ position: "static", backgroundColor: '#E89984', background: 'transparancy: 1000' }} >
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
