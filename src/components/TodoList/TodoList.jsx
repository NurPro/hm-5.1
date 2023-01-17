import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({posts}) => {
  return (
    <div>
      {posts.map((item) => (
        <TodoItem items={item} />
      ))}
    </div>
  );
};

export default TodoList;