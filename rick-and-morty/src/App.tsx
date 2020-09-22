import React, {useState} from 'react';
import './App.css';

type FormElem = React.FormEvent<HTMLFormElement>

const App: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<string[]>([]);

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    console.log(value);
    setValue('');
  }

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
}

export default App;
