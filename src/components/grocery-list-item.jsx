import React from 'react';
export default props => {
  return (
    <div>
      <input onBlur={props.blurAction} type="text" onChange={props.editAction} value={props.text} style={ props.editing ? {display : 'block'} : {display : 'none'} }/>
      <span style={ props.editing ? {display : 'none'} : {display : 'inline'} }>
        <span onClick={props.toggleEditAction} >{props.text}</span> - <button onClick={props.removeAction}>X</button>
      </span>
    </div>
  );
};
