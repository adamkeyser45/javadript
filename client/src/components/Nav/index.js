import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';
// import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import Box from '@material-ui/core/Box';

import About from '../pages/About'
import Pricing from '../pages/Pricing';
import SignInSide from '../pages/SignInSide';
import SignUp from '../pages/SignUp';

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

export default function Nav() {
    const classes = useStyles();
  
    const [currentPage, setCurrentPage] = useState('About');
  
    const renderPage = () => {
        switch (currentPage) {
            case 'Pricing':
              return <Pricing />;
            case 'SignUp':
              return <SignUp />;
            case 'SignIn':
                return <SignInSide />
            default:
              return <About />;
        }
    };
  
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
             <a href= "/" className="homelink">javaDript</a>
            </Typography>
            <nav>
              <Link variant="button" color="textPrimary" href="#" className={classes.link} onClick={() => { setCurrentPage('About') }}>
                About
              </Link>
              <Link variant="button" color="textPrimary" href="#" className={classes.link} onClick={() => { setCurrentPage('Pricing') }}>
                Pricing
              </Link>
            </nav>
            <Button href="#" color="primary" variant="outlined" className={classes.link} onClick={() => { setCurrentPage('SignIn') }}>
              Login
            </Button>
            <Button href="#" color="primary" variant="outlined" className={classes.link} onClick={() => { setCurrentPage('SignUp') }}> 
              Sign Up
            </Button>
          </Toolbar>
        </AppBar>
        {renderPage()}
        </React.Fragment>
  );
}