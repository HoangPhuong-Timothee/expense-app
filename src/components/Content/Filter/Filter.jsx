import React from "react";
import '../Filter/filter.css'

export default function Filter(props) {
  const handleChangeYear = (e)=>{
    props.onChangeFilter(e.target.value)
  }
  return (
    <div className="filter">
      <div className="filter-container">
        <label>Filter by year</label>
        <select value={props.selected} onChange={handleChangeYear}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
}
