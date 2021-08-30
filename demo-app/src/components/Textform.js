import React, { useState } from "react";
import PropTypes from 'prop-types'
export default function Textform(props) {
    const uppercaseClick=()=>{
        console.log("hello up case"+text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleunchange=(event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    const [text, setText] = useState();
    
  return (
    <div>
      <div className="mb-3">
        <label  className="form-label">
          {props.name}
        </label>
        <textarea
          className="form-control"
          id="textArea"
          rows="5" value={text} onChange={handleunchange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={uppercaseClick}>Uppercase</button>
    </div>
  );
}
Textform.propTypes ={
    name:PropTypes.string.isRequired,
}