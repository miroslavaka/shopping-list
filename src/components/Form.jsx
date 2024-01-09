import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Form = ({ onHandleAddItems }) => {
  const [good, setGood] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('form submited');
    //WHEN THERE IS NO NAME dont submit form:
    if (!good) return;

    //CREATE NEW OBJECT:
    const newItem = { name: good, quantity, unit, selected: false };
    console.log('newItem: ', newItem);
    onHandleAddItems(newItem);

    //SET FORM BACK TO INITIAL STATE:
    setGood('');
    setQuantity('');
    setUnit('');
  }

  function handleGood(e) {
    setGood(e.target.value);
  }
  function handleQuantity(e) {
    setQuantity(e.target.value);
  }
  function handleUnit(e) {
    setUnit(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="good"
        value={good}
        onChange={handleGood}
      />
      <input
        type="text"
        placeholder="quantity"
        value={quantity}
        onChange={handleQuantity}
        size="5"
      />
      <input type="text" placeholder="unit" onChange={handleUnit} size="4" />
      <button>
        <FontAwesomeIcon icon={faPlus} className="icon" />
      </button>
    </form>
  );
};
export default Form;
