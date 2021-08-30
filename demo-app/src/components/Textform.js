import React from "react";
import PropTypes from 'prop-types'
export default function Textform(props) {
  return (
    <div>
      <div className="mb-3">
        <label for="textArea1" className="form-label">
          {props.name}
        </label>
        <textarea
          className="form-control"
          id="textArea"
          rows="8" placeholder="Enter your text"
        ></textarea>
      </div>
    </div>
  );
}
Textform.propTypes ={
    name:PropTypes.string.isRequired,
}