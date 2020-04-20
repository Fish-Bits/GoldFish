import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

class createEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: new Date(),
      description: '',
      location: ''
    }
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeName(e){
    this.setState({
      name: e.target.value,
    });
  }

  onChangeDate(date){
    this.setState({
      date: date
    });
  }

  onChangeLocation(e){
    this.setState({
      location: e.target.value,
    });
  }

  onChangeDescription(e){
    this.setState({
      description: e.target.value,
    });
  }

  onSubmit(){
    const event = {
      name: this.state.name,
      date: this.state.date,
      description: this.state.description,
      location: this.state.location,
    }

    axios.post('/events/', event)
    .then(res => console.log(res.data));
    window.location = '/home'
  }
  render() {
    return (
      <div>
        <h2>Add New Event</h2>
          <div>
            <div className="form-group">
              <label>Name:</label>
              <div>
                <input type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Date:</label>
              <div>
                  <DatePicker
                  selected={this.state.date}
                  onChange={this.onChangeDate}
                  />
                </div>
            </div>

            <div className="form-group">
              <label>Location:</label>
              <div>
                <input type="text"
                  className="form-control"
                  value={this.state.location}
                  onChange={this.onChangeLocation}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Description:</label>
              <div>
                <input type="text"
                  className="form-control"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
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