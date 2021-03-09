import React from "react";

function App() {
  const [fullName, setFullName] = React.useState({
    firstName: "",
    lastName: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          firstName: value,
          lastName: prevValue.lastName
        };
      } else if (name === "lName") {
        return {
          firstName: prevValue.firstName,
          lastName: value
        };
      }
    });
  }

  // const newValue = event.target.value;
  // const inputName = event.target.name;

  //   setFullName((prevValue) => {
  //     if (inputName === "fName") {
  //       return {
  //         firstName: newValue,
  //         lastName: prevValue.lastName
  //       };
  //     } else if (inputName === "lName") {
  //       return {
  //         firstName: prevValue.firstName,
  //         lastName: newValue
  //       };
  //     }
  //   });
  // }

  return (
    <div className="container">
      <h1>
        Hello {fullName.firstName} {fullName.lastName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          value={fullName.firstName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={fullName.lastName}
          name="lName"
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
