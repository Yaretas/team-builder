import React from 'react';

export default function TeamMembers(props) {
    return (
        <div>
            {props.teamList.map(team =>{
                return (
                    <div key={team.id}>
                    <h2>{team.name}</h2>
                    <p>{team.role}</p>
                    <p>{team.email}</p>
                    </div>
                );
            })}
        </div>
    )
}