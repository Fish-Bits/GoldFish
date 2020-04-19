import React from 'react';
import Paper from '@material-ui/core/Paper';

// const Event = (props) => {
//   const { name, date, description, location } = props;
//   return (
//     <article className="eventCard">
//       <div className="cardInfo">
//         <h1>{name}</h1>
//         <h2>{location}</h2>
//         <h3>{date}</h3>
//         <div className="eventDescriptions">
//           <h6>{description}</h6>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default Event;

const Event = (props) => {
  const { name, date, description, location } = props;
  return (
    <Paper>
      <h1>{name}</h1>
      <h2>{location}</h2>
      <h3>{date}</h3>
      <h6>{description}</h6>
    </Paper>
  );
};

export default Event;
