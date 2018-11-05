import React, { Component } from 'react';
import Joke from './Joke';
import axios from 'axios';

class JokeDad extends Component {
  constructor(props) {
    super(props);

    this.state = { jokes: [] };
  }

  async componentDidMount() {
    let response = [];

    for (let i = 0; i < 10; i++) {
      response.push(
        axios({
          url: 'https://icanhazdadjoke.com',
          method: 'get',
          headers: { Accept: 'application/json' }
        })
      );
    }

    let resolvedPromises = await Promise.all(response);

    let jokesArr = resolvedPromises.map(promise => promise.data);

    console.log(jokesArr);

    jokesArr.forEach(jokeObj => {
      jokeObj.up = 0;
      jokeObj.down = 0;
    });

    this.setState({ jokes: jokesArr });
  }

  render() {
    let jokeList = this.state.jokes.map(joke => (
      <Joke text={joke.joke} id={joke.id} up={joke.up} down={joke.down} />
    ));
    return <div>{jokeList}</div>;
  }
}

export default JokeDad;
