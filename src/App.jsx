import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Items from './components/Items';
//inspiration:
//https://codepen.io/johnnycopes/pen/GjVLaL
//https://codepen.io/amegahy/pen/NWKzeJy
//https://codepen.io/Stradjazz/pen/dyYzXvx
//https://codepen.io/mauriciospesot/pen/MGpvgZ
//https://codepen.io/rajcsanyiz/pen/qxJEdW
//https://nikolencz.github.io/ToDo-list/

const initialItems = [
  { name: 'bread', quantity: '1', unit: 'pc', selected: false },
  { name: 'butter', quantity: '1', unit: 'pc', selected: false },
  { name: 'milk', quantity: '3', unit: 'liter', selected: false },
  { name: 'orange juice', quantity: '2', unit: 'liter', selected: false },
  { name: 'banana', quantity: '0.5', unit: 'kg', selected: false },
];

function App() {
  const [updatedItems, setUpdatedItems] = useState(initialItems);

  function handleAddItems(item) {
    setUpdatedItems((updatedItems) => [...updatedItems, item]);
  }
  console.log('updatedItems: ', updatedItems);

  function handleDeleteItem(name) {
    console.log('item to be deleted: ', name);
    const updatedListAfterDelete = updatedItems.filter(
      (item) => item.name !== name,
    );
    setUpdatedItems(updatedListAfterDelete);
  }

  function handleCheckItem(name) {
    console.log('item to be updated: ', name);
    const booksAfterUpdate = updatedItems.map((item) =>
      item.name === name ? { ...item, selected: !item.selected } : item,
    );
    setUpdatedItems(booksAfterUpdate);
  }
  return (
    <>
      <div className="App">
        <Header />
        <Form initialItems={initialItems} onHandleAddItems={handleAddItems} />
        <Items
          initialItems={initialItems}
          updatedItems={updatedItems}
          onDeletedItem={handleDeleteItem}
          onHandleCheck={handleCheckItem}
        />
      </div>
    </>
  );
}

export default App;
