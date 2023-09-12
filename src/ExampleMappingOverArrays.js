// Map is a method that allows to transform arrays into new arrays
// Map doesn't change the length the array
// Map behaves as a loop over the array

export default function ExampleMappingOverArrays() {
  // const teamMembers = [
  //   'Karl',
  //   'Lukas',
  //   'Lukas', // 💥 will cause issues with duplicated keys
  // ];

  const teamMembers = [
    { id: 1, name: 'Karl' },
    { id: 2, name: 'Lukas' },
    { id: 3, name: 'Lukas' },
  ];

  return (
    <div>
      {teamMembers.map((teamMember) => {
        return (
          // <div key={`teamMember-${teamMember}`}> // 💥
          <div key={`teamMember-${teamMember.id}`}>
            <div>{teamMember.name}</div>
          </div>
        );
      })}
    </div>
  );
}
