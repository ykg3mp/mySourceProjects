import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

function TextButton(props) {
    const classes = useStyles();
  
    return <Button variant="contained" color="secondary" className={classes.button} {...props} />;

  }

  export default TextButton;
