import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import StarIcon from '@material-ui/icons/StarBorder';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import '../../assets/style.css';
import cafeImg from '../../assets/cafe.png';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        javaDript
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));


export default function About() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className="wrapper">
        <CssBaseline />

        {/* Hero unit */}
        <Container maxWidth="lg" component="main"  className="padding">
          
          <Typography component="h1" variant="h4" align="center" className="googleFont" gutterBottom>
            javaDript.about()
          </Typography>

          <Grid container spacing={4} alignItems="flex-end" className="aboutGrid">

          <Grid item xs={12} md={7}>
          <Typography variant="h5" align="left" color="textSecondary" component="p" className="googleFont">
              javaDript was started by three entrepid Code Boot Camp students, who had a need
              for keeping themselves awake when they were completing their grueling Module Lessons.
          </Typography>
          <br />
          <Typography variant="h5" align="left" color="textSecondary" component="p" className="googleFont">
              They came up with a set of of curated coffee bean blends that help keep coders awake
              and focused while doing what they do best!
          </Typography>
          <br />
          <Typography variant="h5" align="left" color="textSecondary" component="p" className="googleFont">
            javaDript is a monthly subscription box service where you can have these curated coffee's shipped right
            to your door!
            </Typography>
          </Grid>
          <br />
          <Grid item xs={10} md={4}>
          <Card className={classes.root}>
            <CardContent>
              <CardMedia
                component="img"
                alt="A laptop and coffe mug"
                image={ cafeImg }
                title="Coffee Cafe"
              />
            </CardContent>

          </Card>
          </Grid>
          </Grid>

        </Container>
        {/* End hero unit */}

        {/* Footer */}
        <Container maxWidth="md" component="footer" className={classes.footer}>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
        {/* End footer */}

      </div>
    </React.Fragment>
  );
}