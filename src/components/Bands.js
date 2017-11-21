import React, { Component } from 'react';
import Band from './Band.js'

class Bands extends Component {
  render() {
    console.log("in bands", this.props.store.getState().bands)

    const bands = this.props.store.getState().bands.map((band, idx) => {
      return <Band key={idx} band={band} store={this.props.store}/>
    })
    return(
      <ul>
        {bands}
      </ul>
    );
  }
};

export default Bands;
