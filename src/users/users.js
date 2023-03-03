import React from "react";

export default class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        { name: "me", age: 12, display: true },
        { name: "do not display", age: 13, display: false },
        { name: "memo", age: 15, display: true },
        { name: "do not display", age: 16, display: false },
        { name: "nemo", age: 17, display: true },
      ],
    };
  }

  render() {
    // Conditional Rendering
    return (
      <>
        {/* First example */}
        {this.state.users.map((user) => {
          if (user.display) {
            return <button> Hello, {user.name}</button>;
          }
        })}
        {/* Second example */}
        <ul>
          {this.state.users.map((user) => {
            if (user.display) {
              return (
                <li>
                  Welcome, {user.name} with {user.age} years old.
                </li>
              );
            }
          })}
        </ul>
      </>
    );
  }
}
