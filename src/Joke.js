import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faThumbsDown,
  faStroopwafel
} from '@fortawesome/free-solid-svg-icons';

library.add(faThumbsUp, faThumbsDown, faStroopwafel);

class Joke extends Component {
  render() {
    return (
      <div key={this.props.id} className="Joke">
        <div>{this.props.text}</div>
        <FontAwesomeIcon icon="thumbs-up" />
        <FontAwesomeIcon icon="thumbs-down" />
      </div>
    );
  }
}

export default Joke;
