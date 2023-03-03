import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// The class name must start with a capital character
export default class Navbar0 extends React.Component {
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
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
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
