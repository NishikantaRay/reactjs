import React, { useState } from "react";
import PropTypes from 'prop-types'
import Watch from './Watch'
export default function Textform(props) {
    const uppercaseClick=()=>{
        console.log("hello up case"+text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const lowcaseClick=()=>{
      console.log("hello low case"+text);
      let newText = text.toLowerCase();
      setText(newText);
  }
  const clearcaseClick=()=>{
    console.log("hello low case"+text);
    let newText = " ";
    setText(newText);
}
    const handleunchange=(event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    const [text, setText] = useState("hello");
    
  return (
    <>
      <div className="container text-center">
        <Watch></Watch>

      </div>
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
      
      <button className="btn btn-primary mx-1 my-1" onClick={uppercaseClick}>Uppercase</button>
     
      <button className="btn btn-primary mx-1 my-1 " onClick={lowcaseClick}>Lowercase</button>
      <button className="btn btn-primary mx-1 my-1 " onClick={clearcaseClick}>Clearcase</button>
      <div className="container my-3">
        <h1>Text Summary</h1>
        <p>text length-{text.length} No of words{text.split(" ").length-1}</p>
        <p>Preview -{text}</p>
      </div>
    </>
  );
}
Textform.propTypes ={
    name:PropTypes.string.isRequired,
}