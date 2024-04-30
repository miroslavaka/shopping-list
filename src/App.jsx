import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Items from './components/Items';

//https://ibaslogic.com/how-to-edit-todos-items-in-react/
//https://www.robinwieruch.de/react-update-item-in-list/

const initialItems = [
  { name: 'bread', quantity: '1', unit: 'pc', selected: false },
  { name: 'butter', quantity: '1', unit: 'pc', selected: false },
  { name: 'milk', quantity: '3', unit: 'liter', selected: false },
  { name: 'orange juice', quantity: '2', unit: 'liter', selected: false },
  { name: 'banana', quantity: '0.5', unit: 'kg', selected: false },
];

function App() {
  const [updatedItems, setUpdatedItems] = useState(initialItems);
  const [editText, setEditText] = useState(null);

  function handleAddItems(item) {
    setUpdatedItems((updatedItems) => [...updatedItems, item]);
  }

  function handleCheckItem(name) {
    console.log('item to be updated: ', name);
    const booksAfterUpdate = updatedItems.map((item) =>
      item.name === name ? { ...item, selected: !item.selected } : item,
    );
    setUpdatedItems(booksAfterUpdate);
  }

  function handleDeleteItem(name) {
    console.log('item to be deleted: ', name);
    const updatedListAfterDelete = updatedItems.filter(
      (item) => item.name !== name,
    );
    setUpdatedItems(updatedListAfterDelete);
  }

  // function handleTextEdit(name) {
  //   console.log("text to be edited: ", name);
  //   setItemEdited(name);
  //   updatedItems.map((item) => {
  //     if (item.name === name) return setEditing(true);
  //   });
  // }

  function handleEdit(name, updatedName) {
    console.log('handle change on name: ', name);
    console.log('updatedName: ', updatedName);

    setEditText([
      ...updatedItems.map((item) => {
        if (item.name === name) {
          item.name = updatedName;
        }
      }),
    ]);
  }
  console.log('new updated items: ', updatedItems);

  return (
    <>
      <div className="App">
        <Header />
        <Form initialItems={initialItems} onHandleAddItems={handleAddItems} />
        <Items
          initialItems={initialItems}
          updatedItems={updatedItems}
          onHandleCheck={handleCheckItem}
          onDeletedItem={handleDeleteItem}
          onHandleEdit={handleEdit}
          editText={editText}
        />
      </div>
    </>
  );
}

export default App;
