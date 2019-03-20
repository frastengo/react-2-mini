import React from 'react';

export default function EditToggle(props) {
  return (
    <select 
      onChange={ (event) => props.update(event.target.value) }
      className="dropDownContainer ml0">
      <option value="true"> Allow Edit </option>
      <option value="false"> Disable Edit </option>
    </select>
  )
}