import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [first, setFirst] = useState('전')
  const [second, setSecond] = useState('태정')
  // const [fullName, setFullname] = useState('전태정');
  const [empty, setEmpty] = useState('??');

  const handleFullnameClick = () => {
    const newFullname = first + second;
    setEmpty(newFullname)
    
    console.log('풀네임 버튼이 눌렸습니다. 새로운 풀네임:', newFullname);
  };

  const handleEmptyClick = () => {
    setEmpty('??')

    console.log('초기화 버튼이 눌렸습니다. 새로운 풀네임:', '??');
  }




  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      <div>
      <p>{first} + {second} = {empty} 입니다.</p>
          <button onClick={handleFullnameClick}>
            풀네임
          </button>

          <button onClick={handleEmptyClick}>
            초기화
          </button>
          
      </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
