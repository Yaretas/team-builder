import React, {useState} from 'react';

import './App.css';
import TeamData from "./components/data";
import Form from "./components/form";
import TeamMembers from "./components/teamMembers";


function App() {
  const [ member, setMember] = useState(TeamData);

  const addNewMember = tmember => {
    console.log(member);
    setMember([...member, tmember]);
  };

  return (
    <div className="App">
      <h1>Enter your Team Here!</h1>
      <Form addNewMember={addNewMember} />
      <TeamMembers teamList={member} />
    </div>
  );
}

export default App;
