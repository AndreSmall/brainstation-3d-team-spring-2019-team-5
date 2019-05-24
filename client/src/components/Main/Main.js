import React from 'react';
import './Main.scss';
import Hero from '../Hero/Hero'
import FilterVideo from '../FilterVideo/FilterVideo'


class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <Hero />
        <FilterVideo data={this.props.data} />
      </main>
    )
  }
}


export default Main;
