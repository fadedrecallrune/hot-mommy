import React, { Component } from 'react';

import Header from './components/Header'
import About from './containers/About';
import Contacts from './components/Contacts';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Contacts />
      </div>
    );
  }
}

export default App;
