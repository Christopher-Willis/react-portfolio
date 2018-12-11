import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Portfolioitems from './components/portfolioitems/Portfoiloitem';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




import './App.css';

library.add(fas,fab);





class App extends Component {
  render() {
    return (
      <div className="App">
      <Grid container spacing={24} alignItems="center" justify="center" style={{height:600}}>
        <Grid item xs={20}>
          <h1>
            Hello, I'm Chistopher!
          </h1>
          <h3>
            |Full Stack Dev  ||  SEO Monkey  ||  Clean Energy Buff  ||  Addicted to Python| 
          </h3>
          <IconButton style={{padding:3}} size="large"  href="https://github.com/BeCurieUs/" >
            <FontAwesomeIcon icon={['fab', 'github']} size="2x" color="white"/> 
          </IconButton>
          <IconButton style={{padding:3}} size="large" href="https://twitter.com/BeCurieus" >
            <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" color="white" /> 
          </IconButton>
          <IconButton style={{padding:3}} size="large" href="https://www.linkedin.com/in/christopher-willis-8a399a151/" >
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" color="white" /> 
          </IconButton>
        </Grid>
      </Grid>


      
      <Grid container spacing={24} justify="space-evenly" >
        <Grid item xs={6}>
          <h2>
            Portfolio Projects:
          </h2>
        </Grid>
        <Grid item xs={6}>
        </Grid>
        <Grid item >
          <Portfolioitems 
            title="This Webpage :D" 
            content = "Look no further if you want the source code for this page">
          </Portfolioitems>
        </Grid>
        <Grid item >
          <Portfolioitems 
            title="This Webpage :D" 
            content = "Look no further if you want the source code for this page">
          </Portfolioitems>
        </Grid>
        <Grid item >
          <Portfolioitems 
            title="This Webpage :D" 
            content = "Look no further if you want the source code for this page">
          </Portfolioitems>
        </Grid>
      </Grid>
      </div>
    );
  }
}

export default App;



// <Portfolioitems 
// title="This Webpage :D" 
// content = "Look no further if you want the source code for this page">
// </Portfolioitems>