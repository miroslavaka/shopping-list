import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const Item = ({ updatedItems, onDeletedItem, onHandleCheck }) => {
  return (
    <>
      {updatedItems.map((item) => (
        <li key={item.name} className="item">
          <input
            type="checkbox"
            value={item.selected}
            onChange={() => onHandleCheck(item.name)}
          ></input>
          <span style={item.selected ? { textDecoration: 'line-through' } : {}}>
            {item.name}
          </span>
          <span>{item.quantity}</span>
          <span>{item.unit}</span>
          <button>
            <FontAwesomeIcon
              style={{ color: '#42b983' }}
              icon={faPenToSquare}
            />
          </button>
          <button onClick={() => onDeletedItem(item.name)}>
            <FontAwesomeIcon style={{ color: '#42b983' }} icon={faTrash} />
          </button>
        </li>
      ))}
    </>
  );
};
export default Item;
