import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [input, setInput] = useState({
    name: '',
    description: '',
    eatable: false
  })

  const handleInput = (e) =>{
    setInput({...input, [e.target.name]:e.target.value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(Object.values(input).some(x => x === '')) return

  }
  return (

    <div className="App">
      <h1>VEGGIE APP BABYYYY</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Veggie Name</label>
        <input type='text' name="name" onChange={handleInput} value={input.name}/>
        <br/>
        <label htmlFor='description'>Description</label>
        <input type='text' name="description" value={input.description} onChange={handleInput}/>
        <br/>
        <label htmlFor='eatable'>eatable</label>
        <input type='checkbox' name="eatable" value={input.eatable} onChange={handleInput}/>
        <br/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
