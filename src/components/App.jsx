import React from "react";

function App() {
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();

  function setFName(event) {
    setFirstName(event.target.value);
  }

  function setLName(event) {
    setLastName(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {firstName} {lastName}
      </h1>
      <form>
        <input
          onChange={setFName}
          value={firstName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={setLName}
          value={lastName}
          name="lName"
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
