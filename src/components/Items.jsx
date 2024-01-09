import Item from './Item';

const Items = ({ initialItems, updatedItems, onDeletedItem }) => {
  return (
    <section className="list">
      <ul>
        <Item
          initialItems={initialItems}
          updatedItems={updatedItems}
          onDeletedItem={onDeletedItem}
        />
      </ul>
    </section>
  );
};
export default Items;
