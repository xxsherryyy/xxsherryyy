import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'; 


const theme = createMuiTheme({
	palette: {
		primary: {
      light: '#45cab6',
      main: '#17BDA4',
      dark: '#108472',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e9887e',
      main: '#E46B5E',
      dark: '#9f4a41',
      contrastText: '#000',
    },
  }
  });

const styles = theme => ({
  container: {
    // background: "#17BDA4",
    padding: 20,
    margin: 10,
  
    borderColor: "#17BDA4"
},
h1: {
  backgroundColor: "#17BDA4"
},
contact: {
   
    underlineFocusStyle: {
    backgroundColor: "#E46B5E"}
    
  },
  input: {
    color: "#ffff"
  },
  label: {
    color: "#ffff"
  },
  underline: {
    color: "#ffff"
  }

      
});


class Contact extends React.Component { 
  constructor(props) {
    super(props);
    this.state= {
      name: '',
      email: '',
      message: '',
    };
  }
   
  render() {
      
    const {classes} = this.props;
    
 
return(
    <form className={classes.container}>
    <MuiThemeProvider theme={theme}>
    <React.Fragment> 
      <Typography component="h2" variant="h6" gutterBottom >
        <h1 className={classes.h1}>Contact</h1>
        <br></br>
      </Typography>
      <div/>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            className={classes.contact}
            label="First name"
            InputLabelProps={{className: classes.label}}
            fullWidth
            autoComplete="first name" variant= "outlined"
            InputProps={{
              className: classes.input
            }}
           
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            required
            id="lastName"
            className={classes.contact}
            label="Last name"
            InputLabelProps={{className: classes.label}}
            fullWidth
            autoComplete="last name"
            variant= "outlined"
            // underlineFocusStyle={{className: classes.underline}}
            InputProps={{
              className: classes.input
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            className={classes.contact}
            label="Email"
            InputLabelProps={{className: classes.label}}
            fullWidth
            autoComplete="Email"
            variant= "outlined"
            // underlineFocusStyle={styles}
            InputProps={{
              className: classes.input
            }}
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-multiline-static"
            className={classes.contact}
            label="Message"
            InputLabelProps={{className: classes.label}}
            multiline
            rows="10"
            rowsMax="20"
            fullWidth
            variant= "outlined"
            underlineFocusStyle={styles}
            InputProps={{
              className: classes.input
            }}
          />
        </Grid>
        
        
       
        <Grid item xs={12} alignContent= "center" >
        <a target="_blank" href="https://www.linkedin.com/in/sherry-x-yang/" rel="noopener">
        <Button style={{color:"#1B94A1", borderColor:"#1B94A1"}} variant="raised">Submit</Button>

            </a>
        </Grid>
        
        
      </Grid> 
    </React.Fragment>
    </MuiThemeProvider>
    </form>
  );
}
}
Contact.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles (styles)(Contact);