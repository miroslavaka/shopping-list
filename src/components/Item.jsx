import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const Item = ({ updatedItems, onDeletedItem }) => {
  return (
    <>
      {updatedItems.map((item) => (
        <li key={item.name} className="item">
          <input type="checkbox"></input>
          <span>{item.name}</span>
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
