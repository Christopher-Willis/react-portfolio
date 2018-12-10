import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'





class Portfoiloitem extends Component {


  render() {
    return (
      <Card style={{maxWidth: 215,margin:8}}>
        <CardHeader title= {this.props.title}/>
        <CardContent>
          <Typography>
            Look no further if you want the source code for this page
          </Typography>
          <FontAwesomeIcon></FontAwesomeIcon>
        </CardContent>
      </Card>
    );
  }
}


export default Portfoiloitem;
