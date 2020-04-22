import React, { Component, Fragment } from 'react';
import Header from '../components/header.jsx';
import Events from './events.jsx';
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