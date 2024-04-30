import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const Item = ({ updatedItems, onHandleCheck, onDeletedItem, onHandleEdit }) => {
  const [editing, setEditing] = useState(false);

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <>
      {updatedItems.map((item) => (
        <li key={item.name} className="item">
          <input
            type="checkbox"
            value={item.selected}
            onChange={() => onHandleCheck(item.name)}
          />

          {editing ? (
            <input
              type="text"
              //style={editMode}
              value={item.name}
              onChange={(e) => onHandleEdit(item.name, e.target.value)}
              // onChange={(e) => onHandleEdit(item.name)}
            />
          ) : (
            <span
              style={item.selected ? { textDecoration: 'line-through' } : {}}
            >
              {item.name}
            </span>
          )}

          <span>{item.quantity}</span>
          <span>{item.unit}</span>
          <button
            // onClick={() => {
            //   onTextEdit(item.name);
            // }}
            onClick={() => setEditing(true)}
          >
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
