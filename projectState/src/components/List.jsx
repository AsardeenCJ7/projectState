import React, { useState } from "react";

function List() {
  const [getList, setList] = useState([]);
  const [count, setCount] = useState(1);

  function addItem() {
    const addItem = "Item : " + count; // Item : 1
    setList((array) => {
      // setList prevState send that Array
      return [...array, addItem]; // already here array don't change only addItem add
      //Like Here Spread Operator I will not use total array will be change please why use spread operator Hooks.JSX
    });

    setCount((count) => {
      return count + 1;
    });
  }

  return (
    <div>
      <h1>Array Elements</h1>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {getList.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </div>
  );
}

export default List;
