// SUMMARY

// 1. propr drilling
// 2. children Prop

function Nav(props) {
  return (
    <>
      <button>logout</button> {props.username}
    </>
  );
}

function Header(props) {
  return (
    <header>
      Upleveled
      {/* In this case props.children is the Nav */}
      {props.children}
    </header>
  );
}

function HeaderDrilling(props) {
  return (
    <header>
      Upleveled
      <Nav username={props.username} />
    </header>
  );
}

export default function ExamplePropDrilling() {
  const user = { name: 'Jose', email: 'antje@upleveled.io' };
  return (
    <div>
      <HeaderDrilling username={user.name} />
      <Header>
        <Nav username={user.name} />
      </Header>
      ----------
      <h1>My Post</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
}
