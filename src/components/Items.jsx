import Item from './Item';

const Items = ({
  initialItems,
  updatedItems,
  onHandleCheck,
  onDeletedItem,
  onHandleEdit,
}) => {
  return (
    <section className="list">
      <ul>
        <Item
          initialItems={initialItems}
          updatedItems={updatedItems}
          onDeletedItem={onDeletedItem}
          onHandleEdit={onHandleEdit}
          onHandleCheck={onHandleCheck}
        />
      </ul>
    </section>
  );
};
export default Items;
