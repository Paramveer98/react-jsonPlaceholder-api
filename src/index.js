import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Compget from './Compget';
import Comppost from './Comppost';

import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>

        <Compget></Compget>

        <Comppost> </Comppost>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
