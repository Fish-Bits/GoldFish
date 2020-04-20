import React, { Component } from 'react';
// import axios from 'axios';

class createEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      description: '',
      location: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({name: value});
  }
  handleSubmit(){
    axios.post('/event/:id').then((response) => {
      if(response.ok){
        
      }
    })
  }
  render() {
    const {name, date, description, location} = this.state;
    return (
      <div className="newEvent">
        <article>
          <label htmlFor="name">Event Name: </label>
          <input type="text" name="name" value={name} onChange={this.onChange} required/>
          <label htmlFor="location">Location: </label>
          <input type="text" name="location" onChange={this.onChange} value={location} required/>
          <label htmlFor="date">Date: </label>
          <input type="text" name="date" onChange={this.onChange} value={date} required/>
          <label htmlFor="description">Description: </label>
          <textarea type="description" name="description" onChange={this.onChange} value={description} required/>
        </article>
        <input type="submit" value="Submit" onClick={this.onClick}/>
      </div>
    );
    }
  }

export default createEvent;