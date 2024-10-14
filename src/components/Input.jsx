/**
 * @file Input.jsx
 */

import { useState } from "react";
import { useId } from 'react';

const Input = ({ onChangeCallback }) => {
  // state to handle the input value
  const [value, setValue] = useState('');
  const searchInputId = useId();

  // new handler function that will update the state 
  // when the input changes
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue)
    // if the component receives a callback, call it,
    // and pass the input value as an argument
    onChangeCallback && onChangeCallback(inputValue)
  }

  return (
    <>
        <label htmlFor={searchInputId}>Search by Name: </label>
        <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder='Type to search'
        id={searchInputId}
        />
    </>
  )
}

export default Input