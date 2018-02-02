import React from "react";
import PropTypes from 'prop-types';

class Jumbotron extends React.Component {

  render () {

    return (
      <div style={{ height: 250, color: alert }} className="jumbotron">
        {this.props.children}
      </div>
      );
    }

}

Jumbotron.props = {
  children: PropTypes.node
}

export default Jumbotron;
