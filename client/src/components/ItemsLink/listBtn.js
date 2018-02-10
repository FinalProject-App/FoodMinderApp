import React from "react";
import PropTypes from 'prop-types';
import {Router} from

class listBtn extends React.Component {
    render(){
        return (<Router ><Link to="/" /></Router>);
      }
     

listBtn.props= {
  onClick: this.props.history.push("/Items")
}
}
export default listBtn
