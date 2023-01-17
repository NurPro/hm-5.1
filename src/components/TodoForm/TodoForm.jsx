import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import './TodoForm.css'

const TodoForm = ({ newForm }) => {
   const [name, setName] = useState("");
  const [age, setAge] = useState("");


  const nameHandler=(event) => {
    setName(event.target.value)
  } 
   const ageHandler = (event) => {
   setAge(event.target.value)
  }
  
  const objInput = {
    name,
    age
  }
 
  const buttonHandler = () => {
    newForm(objInput)
    setName('')
    setAge('')
    
  }
  return (
    <div className="divForm">
      <Input
        key={"name"}
        label={"UserName"}
        type={"text"}
        value={name}
        placeholder="name"
        onChange={nameHandler}
      />
      <Input
        key={"age"}
        label={"Age (Years)"}
        type={"number"}
        value={age}
        onChange={ageHandler}
      />

      <Button onClick={buttonHandler} btnN={"Add User"} />
    </div>
  );
};

export default TodoForm;
