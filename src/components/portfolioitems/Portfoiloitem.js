import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import CardContent from '@material-ui/core/CardContent';
import Tooltip from '@material-ui/core/Tooltip';
import CardActions from '@material-ui/core/CardActions';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';






class Portfoiloitem extends Component {


  render() {
    return (
      <Card style={{maxWidth: 215,margin:8}}>
        <CardHeader title= {this.props.title}/>
        <Divider />
        <CardContent>
          <Typography gutterBottom component="p">
            {this.props.content}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="caption" >made with:</Typography>
          <Tooltip title="Javascript" >
            <FontAwesomeIcon  style ={{marginTop:1}}  icon={['fab', 'js']} color="black" size="lg"/>
          </Tooltip>
          <Tooltip title="React" >
            <FontAwesomeIcon icon={['fab', 'react']} color="black" size="lg"/>
          </Tooltip>
        </CardContent>
        <Divider />
        <CardActions>
          <Button size="small" href="https://github.com/BeCurieUs/react-portfolio" >See on GitHub 
            <FontAwesomeIcon style={{marginLeft:5}} icon={['fab', 'github']} color="black" size="lg"/> 
          </Button>
        </CardActions>
      </Card>
    );
  }
  
}


export default Portfoiloitem;
