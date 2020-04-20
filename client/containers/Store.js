import React from 'react';
export const CTX = React.createContext();

const initState = {
  general: [
    {from: 'Sieun', msg: 'Hello'},
    {from: 'Brianna', msg: 'Goodbye'},
    {from: 'Alon', msg: 'Hello Again'},
    {from: 'Brian', msg: 'No, foreal'}
  ],

}

function reducer(state, action) {

  switch(action.type) {
    case 'RECEIVE_MESSAGE':
      return {
        ...state,
      }
      default:
        return state;
  }
}


export default function Store(props) {
  const reducerHook = React.useReducer(reducer, initState);
  return (
    <CTX.provider value={reducerHook}>
      {props.children}
    </CTX.provider>
  )
}
