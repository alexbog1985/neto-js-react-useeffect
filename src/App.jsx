import './App.css'

import { useState, useEffect } from 'react';

import {Details} from "./components/Details/Details.jsx";
import List from "./components/List/List.jsx";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch()
  }, [])

  return (
    <div className="app-container">
      <h2>Общий каркас страницы:</h2>
      <div className="container">
        <div className="column">
          <List />
        </div>
        <div className="column">
          <Details />
        </div>
      </div>
    </div>
  )
}

export default App
