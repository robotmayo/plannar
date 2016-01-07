import React from 'react';
export default props => {
  console.log(props);
  return (
    <ul>
      {props.items.map( (item, i) => <li key={i}>{item}</li>)}
    </ul>
  )
}