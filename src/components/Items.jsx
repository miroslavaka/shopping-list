import Item from './Item';

const Items = ({
  initialItems,
  updatedItems,
  onHandleCheck,
  onDeletedItem,
  onHandleEdit,
}) => {
  return (
    <>
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

      {/* -----------------SORTING----------------- */}
      <section className="sorting-clearing">
        <div className="sorting">
          <select name="sort">
            <option value="description">Sort by description</option>
            <option value="status">Sort by shopping status</option>
          </select>
        </div>
        <div className="clear">
          <button className="btn">Clear list</button>
        </div>
      </section>
    </>
  );
};
export default Items;
