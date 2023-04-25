import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    async function readServerData() {
      const resp = await fetch('/api/todos');
      const data = await resp.json();

      console.log('Data from server:', data);

      setServerData(data);
    }

    readServerData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {serverData.map((t) => (
          <h1 key={t.todoId}>{t.task}</h1>
        ))}
      </header>
    </div>
  );
}

export default App;
