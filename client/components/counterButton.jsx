import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import sticker from '../assets/GoldfishSticker.png';
import '../stylesheets/app.css';

// Button to increment number of participants

class CounterButton extends Component {
  constructor(props){
    super(props)
  }
  state = { counter: 0 };

  handleIncrement = () => {
    this.setState(state => ({counter: state.counter + 1}));
  };

  handleDecrement = () => {
    this.setState(state => ({counter: state.counter - 1}));
  };
  render() {
    const displayCounter = this.state.counter > 0;

    return (
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={this.handleIncrement}>
          <img src={sticker} className="resize"/>
        </Button>
        {displayCounter && <Button disabled>{this.state.counter}</Button>}
        {displayCounter && <Button onClick={this.handleDecrement}>-</Button>}
      </ButtonGroup>
    );
  }
}

export default CounterButton;