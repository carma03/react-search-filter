/**
 * @file CategoryDropdown.jsx
 */

import { useState } from "react";
import { useId } from 'react';

const capitalizeOption = (value) => {
  return value.length < 1 ? '' : value[0].toUpperCase() + value.slice(1);
}

const CategoryDropdown = ({ products, onChangeCallback }) => {
  // state to handle the input value
  const [value, setValue] = useState('');
  const selectId = useId();
  // const [options, setOptions] = useState([]);

  // new handler function that will update the state 
  // when the input changes
  const handleChange = (e) => {
    const optionValue = e.target.value;
    setValue(optionValue)
    // if the component receives a callback, call it,
    // and pass the input value as an argument
    onChangeCallback && onChangeCallback(optionValue)
  }

  const optionItems = ['all'];

  products.forEach((product) => {
    if (optionItems.indexOf(product.category) === -1) {
      optionItems.push(product.category);
    }
  });

  return (
    <>
        <label htmlFor={selectId}>Filter by Category: </label>
        <select
          type="text"
          value={value}
          onChange={handleChange}
          id={selectId}
        >
          {optionItems.map((option) => {
            return (
              <option key={option} value={option}>
                {capitalizeOption(option)}
              </option>
            );
          })}
        </select>
    </>
  )
}

export default CategoryDropdown