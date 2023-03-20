import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-blue-700 text-3xl font-bold">
        Vite + React + Tailwind
      </h1>
      <div className="card">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="border border-gray-400 rounded-lg px-3 py-2 mb-3"
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
