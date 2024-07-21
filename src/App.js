import React, { useState, useEffect } from 'react';
import List from './List';
import './App.css';

function App () {
  const [lists, setlists] = useState([]);

  const addlist = (item) => {
    setlists([...lists, item]);
  };

  useEffect(() => {
    console.log('List updated:', lists);
  }, [lists]);

  return (
    <div className="App">
      <h1>List </h1>
      <List addlist={addlist} />
      <ul>
        {lists.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
