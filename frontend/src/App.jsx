import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])


  return (
    <>
      <h1>Hello There</h1>
      <p>{jokes.length}</p>

      {
        jokes.map((jokes, index) => (
          <div key={jokes.id}>
            <h3>{jokes.question}</h3>
            <p>{jokes.answer}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
