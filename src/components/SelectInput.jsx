import React from 'react';

const SelectInput = ({ options, value, onChange }) => {
  return (
    <select
      className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      value={value}
      onChange={onChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
