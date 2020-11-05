import React from 'react';
import '../../assets/style.css';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import image1 from '../../assets/img/1.jpg';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        JavaDript
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

const tiers = [
  {
    title: 'Bootcamp',
    price: '20',
    description: ['2 Bags Included',
      'Whole Beans',
      'Heavily Caffeinated',
      'Light to Medium Roasts'],
    buttonText: 'Order Now!',
    buttonVariant: 'outlined',
  },
  {
    title: 'Junior Dev',
    subheader: 'Most popular',
    price: '40',
    description: [
      '3 Bags & Funny Mug Included',
      'Freshly Ground',
      'Super Heavily Caffeinated',
      'Medium to Dark Roasts',
    ],
    buttonText: 'Order Now!',
    buttonVariant: 'contained',
  },
  {
    title: 'Senior Dev',
    price: '50',
    description: [
      '4 Bags & Bourbon Included',
      'Instant Mix (quick access)',
      'Pure Caffeine',
      '...Bourbon',
    ],
    buttonText: 'Order Now!',
    buttonVariant: 'outlined',
  },
];

export default function Pricing() {
  const classes = useStyles();

  return (

    <React.Fragment>
      <div className="wrapper">
        <CssBaseline />
        {/* Hero unit */}
        <Container maxWidth="sm" component="main" background="main" className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" className="googleFont" gutterBottom>
            pricing ()
        </Typography>
          <Typography variant="h5" align="center" className="googleFont2" component="p">
            We have crafted three subscription boxes to cater to your specific coffee needs.
        </Typography>
        </Container>
        {/* End hero unit */}
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                <Card className="card">
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                    className={"cardHeader"}
                  />
                  <CardContent>
                    <div className={classes.cardPricing}>
                      <Typography component="h2" variant="h3" className="googleFont" color="textPrimary">
                        ${tier.price}
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        /mo
                    </Typography>
                    </div>
                    <CardMedia
                      component="img"
                      alt="Coffee image"
                      height="140"
                      image={ image1 }
                      title="coffee image"
                    />
                    <ul>
                      {tier.description.map((line) => (
                        <Typography component="li" variant="subtitle1" align="center" key={line}>
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth variant={tier.buttonVariant} color="primary">
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Footer */}
        <Container maxWidth="md" component="footer" className={"footer"}>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </div>
      {/* End footer */}
    </React.Fragment>
  );
}