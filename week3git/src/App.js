import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile.js';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import TextButton from './components/NiceButtons.js'
import IconLabelTabs from './components/iconTabs.js'
import Grid from '@material-ui/core/Grid';



class App extends Component {
  constructor(){
    super();
    this.state = {
      index: 0
    }
  }


  increment = () => {
    let curIndex = this.state.index;
    let nextIndex = curIndex + 1;
    this.setState({
      index: nextIndex
    })
  }

  render(){
    return(
      
      <Grid
      container
      spacing={0}
      align="center"
      justify="center"
      style={{ backgroundColor: 'white' }}
      >

      <Grid item style={{ backgroundColor: 'white' }}>
      <IconLabelTabs/>
      <Profile curImageIndex={this.state.index}/>
      <TextButton onClick={() => this.increment()}> Next Squirrel </TextButton>
    </Grid>
  </Grid>
    )
    }
  }


export default App;
