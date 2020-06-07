import React, { Component, Fragment } from 'react';
import Header from '../components/Header.jsx';
import Events from './Events.jsx';
import '../stylesheets/app.css';

const EventsPage = (props) => {
  return (
    <div className="bg">
      <Header />
      <Events />
    </div>
  );
};

export default EventsPage;