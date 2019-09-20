import React, { createRef } from 'react';
import './App.css';

const list = [
  {
    id: 'Story',

  },
  {
    id: 'Mission',

  },
  {
    id: 'Event',

  },
  {
    id: 'Get Involved',

  },
];

const ListScrollToItem = () => {
  const refs = list.reduce((acc, value) => {
    acc[value.id] = createRef();
    return acc;
  }, {});

  // Scroll Into View API: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
  const handleClick = id =>
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

  return (

    <div align = 'center'>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
      <ul>
        {list.map(item => (
          <td key={item.id} >
            
            <button 
              // id = "cleanButton"
              class="w3-button w3-black"
              type="button"
              onClick={() => handleClick(item.id)}
            >
              {item.id}
            </button>
          </td>
        ))}
      </ul>

      <ul> 
        {list.map(item => (
          <li
            
            key={item.id}
            ref={refs[item.id]}
            style={{ height: '250px', border: '1px solid green'}}
          >
            <div>{item.id}</div>
            <div>{item.firstname}</div>
            <div>{item.lastname}</div>
            <div>{item.year}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListScrollToItem;