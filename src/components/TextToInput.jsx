import React from 'react';

export default props => {
  let showThis = props.children;
  if(props.showInput){
    showThis = (
      <input 
        type={props.inputType}
        style={props.inputStyle}
        className={props.className}
      />
    );
  }
  
  return (
    <div onClick={props.toggleInputAction}>
      {showThis}
    </div>
  );
};