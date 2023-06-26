import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { useEffect, useState } from 'react';
import Display from './components/Display';
function App() {
  const [submitted, setSubmitted] = useState(0)
  const [input, setInput] = useState({
    name: '',
    description: '',
    eatable: false
  })

  const handleInput = (e) =>{
    setInput({...input, [e.target.name]: e.target.name == "eatable"? e.target.checked : e.target.value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(Object.values(input).some(x => x === '')) return
    axios({
      method:"POST",
      url:"/create_veggie",
      data:{
        name:`${input.name}`,
        description:`${input.description}`,
        eatable: input.eatable
      }
    })
    setInput({
      name: '',
      description: '',
      eatable: false
    })
    setSubmitted(submitted+1)
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
      <br/>
      <Display submitted={submitted}/>
    </div>
  );
}

export default App;
