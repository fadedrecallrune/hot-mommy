import React, { Component } from 'react';

import Header from './components/Header'
import About from './containers/About';
import Footer from './components/Footer';
import LoveText from './components/LoveText/LoveText';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <LoveText />
        <Footer />
      </div>
    );
  }
}

export default App;
