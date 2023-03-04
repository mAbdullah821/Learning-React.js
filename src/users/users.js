import React from "react";
import Button from "react-bootstrap/Button";
import shortid from "shortid";

export default class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      isAuth: true,
      users: [
        { name: "me", age: 12, display: true },
        { name: "do not display", age: 13, display: false },
        { name: "memo", age: 15, display: true },
        { name: "do not display", age: 16, display: false },
        { name: "nemo", age: 17, display: true },
      ],
    };
  }

  toggleIsAuth() {
    this.setState({ isAuth: !this.state.isAuth });
  }

  render() {
    // Conditional Rendering
    // Only use 'Array.map()' to create an element list.
    // As a rule of thumb, we should add a 'key' attribute for each element when we use 'Array.map()' to uniquely identify each element for good rendering performance, don't use the element 'index' as a unique key, the key must be unique at the level of the same type siblings element, e.g
    // (
    //   <ul>
    //     <li key="unique_key"> text </li>
    //     <li key="unique_key"> text </li>
    //     <li key="unique_key"> text </li>
    //   </ul>
    // )

    return (
      <>
        {/* First example */}
        {this.state.isAuth &&
          this.state.users.map((user) => {
            if (user.display) {
              return (
                <button key={shortid.generate()}> Hello, {user.name}</button>
              );
            }
          })}
        {/* Second example */}
        <ul>
          {this.state.isAuth ? (
            this.state.users.map((user) => {
              if (user.display) {
                return (
                  <li key={shortid.generate()}>
                    Welcome, {user.name} with {user.age} years old.
                  </li>
                );
              }
            })
          ) : (
            <h1> Please Login </h1>
          )}
        </ul>
        {/* Separator Comment */}
        <div className="d-grid gap-2">
          <Button
            variant="success"
            size="lg"
            onClick={() => this.toggleIsAuth()}
          >
            Toggle isAuth
          </Button>
        </div>
      </>
    );
  }
}
