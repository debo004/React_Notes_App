import React, { useState } from 'react'
import plusicon from "../../assets/plus.jpg";
import "./Sidebar.css";

export default function Sidebar(props) {

  const color = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];

  const [listOpen, setListOpen] = useState(false);

  return (
    <div className='sidebar'>
        <img src={plusicon} alt='Add' onClick={() => setListOpen(!listOpen)} />
        <ul className= {`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
          {
            color.map((item, index) => (
            <li key={index} 
            className='sidebar_list_items' 
            style={{backgroundColor: item}}
            onClick={() => props.addNote(item)}
            />
            ))
          }
        </ul>
    </div>
  )
}