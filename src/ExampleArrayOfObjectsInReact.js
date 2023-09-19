import { useState } from 'react';

const people = [
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Theodore',
      last: 'Flores',
    },
    location: {
      city: 'Launceston',
      state: 'Western Australia',
      country: 'Australia',
    },
    email: 'theodore.flores@example.com',
    uuid: 'e40008fc-5077-4846-9409-b2dd9554a1fb',
    picture: 'https://randomuser.me/api/portraits/med/men/84.jpg',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Derek',
      last: 'Gonzales',
    },
    location: {
      city: 'Warragul',
      state: 'Northern Territory',
      country: 'Australia',
    },
    email: 'derek.gonzales@example.com',
    uuid: '45879f5a-3c2b-44a7-acdc-21831a998377',
    picture: 'https://randomuser.me/api/portraits/med/men/23.jpg',
  },
];

export default function ExampleArrayOfObjectsInReact() {
  const [users, setUsers] = useState(people);
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={`user-profile-${user.uuid}`}>
            <img src={user.picture} alt="profile pic" />
            <h2>
              {user.name.title} {user.name.first} {user.name.last}
            </h2>
            <div>
              Location: {user.location.city}, {user.location.country}
            </div>
            <div>Email: {user.email}</div>
            <hr />
          </div>
        );
      })}
      <button
        onClick={() => {
          const newUserId = users[users.length - 1].uuid + 1;
          const newUser = {
            gender: 'male',
            name: {
              title: 'Mr',
              first: 'Derek',
              last: 'Gonzales',
            },
            location: {
              city: 'Warragul',
              state: 'Northern Territory',
              country: 'Australia',
            },
            email: 'derek.gonzales@example.com',
            uuid: newUserId,
            picture: 'https://randomuser.me/api/portraits/med/men/23.jpg',
          };
          // // 1. Create a copy of the current state
          // const newPeople = [...users]; // spread operator
          // // 2. Update the copy created in step 1
          // newPeople.push(newUser);
          // // 3. Set the state to the old state
          // setUsers(newPeople);
          setUsers([...users, newUser]);
        }}
      >
        Add new user
      </button>
      <button
        onClick={() => {
          const newPeople = [...users];
          newPeople[0].name.first = 'Lukas';
          setUsers(newPeople);
        }}
      >
        Change name to Lukas
      </button>
      <button
        onClick={() => {
          const newPeople = [...users];
          newPeople.pop();
          setUsers(newPeople);
        }}
      >
        Delete last user
      </button>
      {/* <h2>
        {users.name.title} {users.name.first} {users.name.last}
      </h2>
      <div>
        Location: {users.location.city}, {users.location.country}
      </div>
      <div>Email: {users.email}</div> */}
    </div>
  );
}
