import React from 'react';

const Event = (props) => {
  const { title, location, date } = props;
  return (
    <article className="eventCard">
    <div className="cardInfo">
      <h1>Title</h1>
      <h2>Location</h2>
      <h3>Date-Time</h3>
      <div className="eventComments">
        <h6>Comments</h6>
      </div>
    </div>
    </article>
  );
};

export default Event;
