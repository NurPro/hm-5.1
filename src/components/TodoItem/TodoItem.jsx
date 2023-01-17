import React from "react";
import './TodoItem.css'
const TodoItem = ({ items }) => {
  console.log(items);
  return (
    <div className="DivTodo">
      <div className="DivItem">
        <p className="DivTodoItem_p">
          {`${items.name} (${items.age} years old)`}
        </p>
      </div>
    </div>
  );
};
export default TodoItem;
