import React, {useState} from 'react';
import './App.css';

type FormElem = React.FormEvent<HTMLFormElement>

interface ITodo {
  text: string;
  complete: boolean;
}

const App: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  }

  const addTodo = (text: string) => {
    const newTodos: ITodo[] = [...todos, {text, complete: false}];
    setTodos(newTodos);
  }

  console.log(todos);
  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} required/>
        <button type="submit">Add Todo</button>
      </form>
      {todos.map(todo => (
        <ul key={todo.text}>
          <li>{todo.text}</li>
        </ul>
      ))}
    </>
  );
}

export default App;
