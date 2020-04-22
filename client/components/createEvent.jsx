import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class createEvent extends Component {
  state = {
    name: '',
    date: new Date(),
    description: '',
    location: '',
    submitted: false,
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    });
  }

  onSubmit = () => {
    const event = {
      name: this.state.name,
      date: this.state.date,
      description: this.state.description,
      location: this.state.location,
    }

    axios.post(`/events/1`, event)
      .then((res) => { this.setState({ submitted: true }) })
  }

  render() {
    if (this.state.submitted) return <Redirect to='/home' />
    else return (
      <div>
        <h2>Add New Event</h2>
        <div>
          <div className="form-group">
            <label>Name:</label>
            <div>
              {/** date picker needs fixing; format: YYYY/MM/DD*/}
              <input type="text"
                name='name'
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Date:</label>
            <div>
              <input name='date' onChange={this.handleChange} />
              {/* <DatePicker
                selected={this.state.date}
                onChange={this.handleChange}
              /> */}
            </div>
          </div>

          <div className="form-group">
            <label>Location:</label>
            <div>
              <input type="text"
                className="form-control"
                name='location'
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Description:</label>
            <div>
              <input type="text"
                className="form-control"
                name='description'
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <button onClick={this.onSubmit}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default createEvent;