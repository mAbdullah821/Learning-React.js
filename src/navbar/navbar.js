import React from "react";

// The class name must start with a capital character
export default class Navbar extends React.Component {
  constructor() {
    super();
    console.log("From Constructor"); // <1>

    // Object to store the variable that we want to change and display them after the change at the front end.
    this.state = {
      title: "Hello from state",
      cnt: 0,
    };
  }

  render() {
    console.log("From Render"); // <2>
    return (
      // <> </> -----> React fragments
      <>
        <p>Hello World, from navbar component</p>
        <p>Hello world again, using react fragment</p>
        <p>Title: {this.state.title} </p>
        <button onClick={() => this.changeState()}>Change state</button>
      </>
    );
  }

  componentDidMount() {
    console.log("From componentDidMount"); // <3>
  }

  componentDidUpdate() {
    console.log("From componentDidUpdate");
  }

  // componentWillUnmount() {
  //   // Cleanup method
  //   console.log("From componentWillUnmount");
  // }

  changeState() {
    let newTitle =
      this.state.cnt % 2 === 0 ? "State was changed" : "Hello from state again";

    // This.setState() ---> will call the render function again to display the changes in state.
    // Change the state manually will not call the render function so we must use [this.setState()] if we want to rerender the UI again with the new [state].
    this.setState({
      title: newTitle,
    });
    this.state.cnt += 1;
  }
}
