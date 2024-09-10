import { useState } from 'react';

const TodoComponent = () => {
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const handleAddTodo = async () => {
    console.log('add todo');
    // const todoData = {
    //   title: { title },
    //   description: { description },
    //   phoneNumber: { phoneNumber },
    // };
    const todoData = {
      title: Title,
      description: Description,
      phoneNumber: PhoneNumber,
    };
    fetch('http://localhost:3000/api/v1/createtodo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todoData),
    }).catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Todo components...</h1>
      <div className="todo-form">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Title..."
          id="title"
          value={Title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <label htmlFor="description">Descrip</label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="description..."
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <label htmlFor="phone">Number:</label>
        <input
          type="number"
          name="phone"
          id="number"
          placeholder="number"
          value={PhoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <br />
        <button onClick={handleAddTodo}>AddTodo</button>
      </div>
    </div>
  );
};

export default TodoComponent;
