import React from 'react';

class Randomizer extends React.Component {
  handleClick = () => {
    console.log('randomize')
  }
  render () {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>Tell Me Where</button>
      </div>
    )
  }
}

export default Randomizer;
