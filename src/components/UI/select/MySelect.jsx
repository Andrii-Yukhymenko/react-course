import React from 'react';

function MySelect({options, defaultValue, onChange, value}) {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      <option disabled value={value}>{defaultValue}</option>
      {options.map((item)=>{
        return <option key={item.value} value={item.value}>{item.name}</option>
      })}
    </select>
  );
}

export default MySelect;
