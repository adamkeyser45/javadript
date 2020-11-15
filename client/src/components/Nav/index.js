import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';

import About from '../pages/About'
import Pricing from '../pages/Pricing';
import SignInSide from '../pages/SignInSide';
import Reviews from '../pages/Reviews';
import SignUp from '../pages/SignUp';

import Auth from '../../utils/auth';

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
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  const classes = useStyles();

  const [currentPage, setCurrentPage] = useState('About');
  
  const renderPage = () => {
      switch (currentPage) {
          case 'Pricing':
            return <Pricing />;
          case 'SignIn':
              return <SignInSide />
          case 'SignUp':
            return <SignUp />
          case 'Reviews':
            return <Reviews />
          default:
            return <About />;
      }
  };
  
    return (
      <React.Fragment>
        <CssBaseline />
        {/* {checkLogin()} */}
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
             <LocalCafeIcon /> <a href= "/" className="homelink">javaDript </a>
            </Typography>
            <nav>
              <Link variant="button" color="textPrimary" href="#" className={classes.link} onClick={() => { setCurrentPage('About') }}>
                About
              </Link>
              <Link variant="button" color="textPrimary" href="#" className={classes.link} onClick={() => { setCurrentPage('Pricing') }}>
                Pricing
              </Link>
              <Link variant="button" color="textPrimary" href="#" className={classes.link} onClick={() => { setCurrentPage('Reviews') }}>
                Reviews
              </Link>
            

            {Auth.loggedIn() ? (
              <>
                <Button href="#" color="primary" variant="outlined" className={classes.link} onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button href="#" color="primary" variant="outlined" className={classes.link} onClick={() => { setCurrentPage('SignIn') }}>
                  Login
                </Button>
                <Button href="#" color="primary" variant="outlined" className={classes.link} onClick={() => { setCurrentPage('SignUp') }}>
                  Signup
                </Button>
              </>
            )}




            </nav>
          </Toolbar>
        </AppBar>
        {renderPage()}
        </React.Fragment>
  );
}