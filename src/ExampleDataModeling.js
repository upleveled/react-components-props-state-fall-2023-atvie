import { useState } from 'react';

const teamRoles = {
  admin: 'admin',
  editor: 'editor',
  noRights: 'no-rights',
};

const teamPositions = {
  fullstackDeveloper: 'Fullstack Developer',
  humanResources: 'Human Resources',
};

const teamMembers = [
  {
    id: '1',
    name: 'Kimberley',
    role: teamRoles.editor,
    position: teamPositions.humanResources,
    pets: ['dog', 'fish'],
  },
  {
    id: '2',
    name: 'Lukas',
    role: teamRoles.admin,
    position: teamPositions.fullstackDeveloper,
    pets: ['cat', 'horse'],
  },
  {
    id: '3',
    name: 'Jose',
    role: teamRoles.admin,
    position: teamPositions.fullstackDeveloper,
    pets: ['turtle'],
  },
  {
    id: '4',
    name: 'Victor',
    role: teamRoles.editor,
    position: teamPositions.fullstackDeveloper,
    pets: ['dog', 'dragon'],
  },
];

export default function ExampleDataModeling() {
  const [team, setTeam] = useState(teamMembers);

  return (
    <div>
      <header>
        <h1> UpLeveled Team Members Dashboard</h1>
      </header>
      {team.map((teamMember) => {
        return (
          <div key={`team-member-div-${teamMember.id}`}>
            Name: {teamMember.name}
            <br />
            Role: {teamMember.role}
            <br />
            <br />
          </div>
        );
      })}

      <button
        onClick={() => {
          const kimberley = team.find((teamMember) => {
            return teamMember.name === 'Kimberley';
          });

          // Update the team by modifying Kimberley
          kimberley.role = teamRoles.admin;

          // Use Spread operator for React to trigger a rerender
          setTeam([...team]); // small immutable step
        }}
      >
        Update Kimberley Role to Admin - Using mutable Approach
      </button>
      <button
        onClick={() => {
          // Copy and Update the currentState using map to copy and modifying the array
          const newTeam = team.map((teamMember) => {
            if (teamMember.name === 'Victor') {
              return { ...teamMember, role: teamRoles.admin };
            }
            return teamMember;
          });

          setTeam(newTeam);
        }}
      >
        Update Victor Role to Admin - Using Immutable Approach
      </button>
    </div>
  );
}
