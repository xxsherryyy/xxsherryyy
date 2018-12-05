import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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


const styles = {
  card: {
    minHeight: 650,
    maxWidth: 350,
    maxHeight: 1000

  },
  media: {
    height: 350,
    width: 350
  },
};


function Portfolio(props) {
  const { classes } = props;
  return (
    <div id="portfolio">
    <Typography component="h2" variant="h6" gutterBottom>
      <h1 className="section-title">Portfolio</h1>
      </Typography>
      <div className ="portfolioContent">
      <MuiThemeProvider theme={theme}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={4}>

          <Card className={classes.card}>
              <CardActionArea>
                <div className="img-container">
                <a href="https://concertdetect.herokuapp.com/" target="_blank">
                  <CardMedia
                    component="img"
                    alt="Concert Detective"
                    className={classes.media}
                    image='./images/detective.png'
                    title="Concert Detective"
                  />
                 </a> 
                </div>


                <CardContent>
                  <Typography component="h2"><h2>
                    Concert Detective</h2>
                  </Typography>
                  <Typography component="p">
                    Concert detective is a web and mobile user friendly app that helps you find concerts on the go. It is search customizable to filter specific details to cater to your music preferences.
          
                    Concert Detective combines the buying power of TicketMaster and flexibility to customize your search on a streamlined user friendly platform to allow ease of search.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <div className="icons-container">
      

                <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"></link>
                <i class="devicon-nodejs-plain colored"></i>


               </div>

           
                <div class="mdc-card__actions">
                  <div class="mdc-card__action-buttons">
                    <Button size="small" color="primary"><a className="link" href="https://github.com/xxsherryyy/concert-detective" target="_blank" rel="noreferrer noopener" >Code</a></Button>
                  </div>
                </div>
              


        </Card>

          </Grid>

          <Grid item xs={12} sm={4}>
           
          <Card className={classes.card}>
              <CardActionArea>
                <div className="img-container">
                  <a href="https://rate-that-dev.herokuapp.com/" target ="_blank" >
                  <CardMedia
                    component="img"
                    alt="Rate That Dev"
                    className={classes.media}
                    image='../images/ratethatdev.PNG'
                    title="Rate That Dev"
                  />
                  </a>
                </div>


                <CardContent>
                <Typography component="h2">
                <h2>Rate That Dev</h2>
                  </Typography>
                <Typography component="p"> 
                  Full-stack React app scores developers on technical skills by peers.
                  Recruiters, CTOs, Hiring managers or startups can contact developers with the closest match to their search requirements.
                  Ratings that reflect the developer's own estimation of their skill as well as anonymous peer reviews of the developer skills ensure that the developer profiles are accurate.
                  </Typography>
                  </CardContent>
              </CardActionArea>
              <div className="icons-container">
              <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css" ></link>
                <i class="devicon-react-original colored"></i>

              </div>
              <div className="links-container">
                <a className="link" target="_blank" rel="noreferrer noopener" href="https://github.com/xxsherryyy/ratethatdev"></a>
                
              </div>

              
                <div class="mdc-card__actions">
                  <div class="mdc-card__action-buttons">
                  <Button size="small" color="primary"><a className="link" href="https://github.com/xxsherryyy/concert-detective" target="_blank" rel="noreferrer noopener" >Code</a></Button>
                  </div>

                </div>
              

            </Card>
          </Grid >

<Grid item xs={12} sm={4}>

<Card className={classes.card}>
    <CardActionArea>
      <div className="img-container">
      <a href="https://dvdkrstndnls.github.io/noplastictoys/" target="_blank">
        <CardMedia
          component="img"
          alt="Plast X"
          className={classes.media}
          height="350"
          width="350"
          image='./images/plastx.png'
          title="Plast X"
        />
       </a> 
      </div>


      <CardContent>
        <Typography component="h2"><h2>
          PlastX</h2>
        </Typography>
        <Typography component="p">
        <p>PlastX: A Platform for Reusing/Sharing plastic toys so as to keep plastic out of our Oceans. 
        Backend storage uses Firebase to store image and content. </p>
        <p>EarthX Hackathon Dallas,TX 2018</p>
        </Typography>
      </CardContent>
    </CardActionArea>
    

         <div class="mdc-card">
           <div class="mdc-card__actions">
        <div class="mdc-card__action-buttons">
          <Button size="small" color="primary"><a className="link" href="https://github.com/xxsherryyy/noplastictoys" target="_blank" rel="noreferrer noopener" >Code</a></Button>
        </div>
      </div>
    </div>


</Card>

</Grid>

        </Grid >
      </MuiThemeProvider>
      </div>
      
    </div>
  )
}
// MediaCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Portfolio);

// class Portfolio extends Component {
//   render() {
//    return(
// <div id="Portfolio" className="section">



// <h2 className="section-title">Portfolio</h2>
//         <Card> 
//           <CardActionArea> 
//         <div className="img-container">
//           <CardMedia
//           component="img"
//           alt="Concert Detective"
//           // className={classes.media}
//           height="140"
//           width="40"
//           image="./images/detective.png"
//           title="Concert Detective"
//         />
//         </div>    



