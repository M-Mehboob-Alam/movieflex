
import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import TodoItem from './components/TodoItem';

function App() {
  const [inputValue, setValue] = useState('');
  const [todoList, setTodoList] = useState(['learn react ']);
  const [message, setMessage]=useState("");
  const onChangeHandler = (e)=>{
    setValue(e.target.value);
  };
  const addHandler = ()=>{
    if(inputValue ===''){
      return;
    }
    setTodoList((preValue)=> [...preValue, inputValue]);
    setValue('');
    setMessage('successfully added');
    setTimeout(() => {
      setMessage('');
    }, 1000);
  }
  const delHandler = (name)=>{
    const newToDo = todoList.filter((item)=> name !=item);
    setTodoList(newToDo);
    setMessage('successfully deleted');
    setTimeout(() => {
      setMessage('');
    }, 1000);

  }
 
  return (
    <div className="App">
      <Navbar/>

      <div className="container">
        {message}
      <div className="inputContainer">
        <input type="text"  value={inputValue} onChange={onChangeHandler} />
        <button onClick={addHandler}>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-clipboard-plus" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
</svg> Add</button>
       
        
      </div>
      
    
      <div>
    
          {
            todoList.map((item)=> (
              <TodoItem key={item} title={item} onDelete={()=> delHandler(item)} />
            ))
          }
      </div>
      </div>
    </div>
  );
}

export default App;
