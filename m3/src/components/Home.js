import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

/*
const styles = {
  root: {
    minHeight: 50,
    width: '100%',
  }
};
*/

/*
const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
};


const styles = {
  root: {
    flex: '1 1 100%',
    justifyContent: 'center',
  },
};
*/
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 20,
    flex: '1 1 100%',
    maxWidth: '100%',
    margin: '0 auto',
  }),
});



function Home(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
    <h2>Home</h2>
    <p>
      This is a test for the next 60 seconds,...  This is only a test.
      I like this test.
      Alot...
    </p>
    <Typography>
      This is another test
    </Typography>
    <Typography>
      hola
    </Typography>

    <Typography gutterBottom variant="title" component="p">
      <a href={"https://github.com/stormasm/ghw-doc/blob/master/ghw.md"} target="_blank">More Info</a>
    </Typography>
    <Typography component="p">rock</Typography>
    <Typography component="p" className={classes.location} gutterBottom>
      <b>Life is Good !</b>
    </Typography>


  </div>
  );
}
export default withStyles(styles)(Home);
