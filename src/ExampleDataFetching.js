import { useEffect, useState } from 'react';

export default function ExampleDataFetching() {
  const [users, setUsers] = useState([]);
  const [usersQuantity, setUsersQuantity] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  async function getUser() {
    const response = await fetch('https://randomuser.me/api/');

    const data = await response.json();

    setUsers([...users, data.results[0]]);
  }

  useEffect(() => {
    async function firstRenderFetch() {
      const response = await fetch('https://randomuser.me/api/');

      const data = await response.json();

      setUsers([data.results[0]]);
    }

    firstRenderFetch().catch((error) => {
      console.log(error);
    });
  }, []); // triggers only on first render

  useEffect(() => {
    async function fetchOnChange() {
      const response = await fetch('https://randomuser.me/api/');

      const data = await response.json();

      setUsers([...users, data.results[0]]);
    }

    fetchOnChange().catch((error) => {
      console.log(error);
    });
  }, [usersQuantity]); // triggers every time the usersQuantity changes

  useEffect(() => {
    if (users.length > 0) {
      setIsLoading(false);
    }
  }, [users]);

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <>
      {users.map((user) => {
        return (
          <div key={`user-profile-${user.uuid}`}>
            <img src={user.picture.medium} alt="profile pic" />
            {user.gender === 'female' ? '♀' : '♂'}
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
      <button onClick={async () => await getUser()}>get new user</button>
      <button onClick={() => setUsersQuantity(usersQuantity + 1)}>
        Change quantity
      </button>
    </>
  );
}
