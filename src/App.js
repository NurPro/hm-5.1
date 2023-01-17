 import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

function App() {

  const [posts, setPosts] = useState([
      
    {
      name: "Bekjhan",
      age: 90,
    },
    {
      name: "Danchik",
      age: 24,
    },
    {
      name: "Bekbol",
      age: 39,
    },
    {
      name: "akbar",
      age: 56,
    },
  ]);

  posts.sort((a, b) => {
    return b.age - a.age
  });

const newForm = (data) =>{
  const copyForm = [...posts]  
  copyForm.push(data)
  setPosts(copyForm);
}
  return (
     <div className="App">
     <TodoForm newForm={newForm} />
     <TodoList posts={posts} />
   </div>
   )
}

export default App;
 