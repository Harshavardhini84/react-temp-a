import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css';
import { BrowserRouter,Link,Routes,Route } from 'react-router-dom';
import App1 from "./components/App1";
import App2 from "./components/App2";
import App3 from "./components/App3";
import App4 from "./components/App4";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div>
      <Link to="app1">App1   | </Link>
      <Link to="app2"> App2  | </Link>
      <Link to="app3"> App3  | </Link>
      <Link to="app4"> App4  | </Link>
    </div>
    <div>
      <Routes>
        <Route index element={<App1/>}/>
        <Route path='app1' element={<App1/>}/>
        <Route path='app2' element={<App2/>}/>
        <Route path='app3' element={<App3/>}/>
        <Route path='app4' element={<App4/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
  // (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
