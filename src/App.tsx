import React from 'react';

import './App.css';
import { Person, Country } from './components/Person';

function App() {
  return (
    <div className="App">
       <Person
    name = "Pedro"
    email = "femi@femi.com"
    age = {21}
    isMarried = {false}
    friends = {["jessica", 'francis', 'paul']}
    country= {Country.Canada}
    />
    </div>
  );
}

export default App;
