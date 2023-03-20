import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-40 flex h-screen w-screen flex-col items-center">
      <h1 className="bg-gradient-to-br from-teal-400 to-blue-600 bg-clip-text text-4xl font-extrabold text-transparent">
        Vite + React + Tailwind
      </h1>

      <button
        onClick={() => setCount((count) => count + 1)}
        className="my-3 rounded-lg border border-gray-400 px-3 py-2"
      >
        count is {count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
};

export default App;
