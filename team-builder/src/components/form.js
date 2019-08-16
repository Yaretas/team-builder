import React, {useState} from 'react';

export default function Form(props) {

    const [team, setTeam] = useState({
        id: "",
        name: "",
        email: "",
        role: ""
    });

    function changeHandler(event) {
        setTeam({...team, [event.target.name]: event.target.value});
    }


function submitFrom(event) {
    event.preventDefault();

    const addMember = {
        ...addMember,
        id: Date.now()
    };
    props.addNewMember(addMember);
}

return (
    <div onSubmit={submitFrom}>
        <label htmlFor="name">Team Member Name: </label>
        <input type="text" name="name" placeholder="Team Member Name" value={team.name} onChange={changeHandler}/>
        <label htmlFor="email">Member Email: </label>
        <input type="email" name="email" placeholder="Team Member Email" value={team.email} onChange={changeHandler}/>
        <button type="submit">Add to the team!</button>
    </div>
)
}