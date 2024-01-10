import Item from './Item';

const Items = ({
  initialItems,
  updatedItems,
  onDeletedItem,
  onHandleCheck,
}) => {
  return (
    <section className="list">
      <ul>
        <Item
          initialItems={initialItems}
          updatedItems={updatedItems}
          onDeletedItem={onDeletedItem}
          onHandleCheck={onHandleCheck}
        />
      </ul>
    </section>
  );
};
export default Items;
