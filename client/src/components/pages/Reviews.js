import React, { useState } from 'react';
import '../../assets/style.css';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Auth from '../../utils/auth';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_ME, QUERY_REVIEWS } from '../../utils/queries';
import { ADD_REVIEW } from '../../utils/mutations';

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

export default function Review() {
  const loggedIn = Auth.loggedIn();
  const classes = useStyles();
  const [reviewText, setText] = useState('');

  const { loading, data } = useQuery(QUERY_REVIEWS);
  const reviews = data?.reviews || [];

  // const { data: userData } = useQuery(QUERY_ME);

  function handleChange(e) {
    setText(e.target.value);
  };

  const submitReview = async event => {
    event.preventDefault();
    console.log(reviewText);

    try {
      await addReview({
        variables: { review: reviewText }
      });

      setText('');
    } catch (e) {
      console.error(e);
    };
  };

  const [addReview, { error }] = useMutation(ADD_REVIEW, {
    update(cache, { data: { addReview } }) {
      try {
        const { reviews } = cache.readQuery({ query: QUERY_REVIEWS });
        cache.writeQuery({
          query: QUERY_REVIEWS,
          data: { reviews: [addReview, ...reviews] }
        });
      } catch (e) {
        console.error(e);
      }
      
      // update me object's cache, appending new review to the end of the array
      // const { me } = cache.readQuery({ query: QUERY_REVIEWS });
      // cache.writeQuery({
      //   query: QUERY_REVIEWS,
      //   data: { me: { ...me, reviews: [...me.reviews, addReview] } }
      // });
    

    }
  });

  return (
    <React.Fragment>
        <div className="wrapper">
        <CssBaseline />

        {/* Hero unit */}
        <Container maxWidth="md" component="main" className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" className="googleFont" gutterBottom>
            reviews ()
            </Typography>
            <Typography variant="h5" align="center" className="googleFont2" component="p">
                Take a look at REAL reviews from coders who enjoy our products!
            </Typography>
        </Container>
        {/* End hero unit */}

        {/*Displayed Reviews*/}
        {loading ? (
          <div>Loading...</div>
        ) : (
        <Container maxWidth="md" component="main" alignitems="center">
            <Paper 
                elevation={5}
                style={{margin: 8}}
            >
            <List>
              {reviews.map(review => (
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <LocalCafeIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                        <Typography variant="h5"  align="left">
                          {review.review}
                        </Typography>
                        <Typography variant="h6"  align="right">
                            -{review.author}
                        </Typography>
                    </ListItemText>
                </ListItem>
              ))}
            </List>  
            </Paper>            
        </Container>
        )}
        {/*End Displayed Reviews*/}

        <br></br>
        {/* Review Form */}

        {loggedIn && (
        <Container maxWidth="md" component="main" alignitems="center">
            <TextField
                id="outlined-full-width"
                label="Leave Your Own Review"
                style={{ margin: 8 }}
                placeholder="What did you think about our coffee?"
                helperText="*Required"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                variant="outlined"
                value={reviewText}
                onChange={handleChange}
            />
            <Button variant="contained" color="primary" style={{ margin: 8 }} onClick={submitReview}>
                Leave a Review
            </Button>
        </Container>          
        )}

        {/* End Review Form */}

        {/* Footer */}
        <Container maxWidth="md" component="footer" className={"footer"}>
            <Box mt={5}>
            <Copyright />
            </Box>
        </Container>
        {/* End footer */}
        </div>
    </React.Fragment>
  );
}