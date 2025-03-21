
import React from 'react';
import Greeting from './components/Greeting';
import UserCard from './components/UserCard';

function App() {
  return (
    <div>
      <Greeting name="John" />
      <UserCard username="johndoe" />
    </div>
  );
}

export default App;
