import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";

function AddUserForm() {
  const [user, setUser] = useState({
    name: "No name yet",
    email: "No email yet",
  });

  const [errors, setErrors] = useState({
    name: null,
    email: null,
  });

  const handleSubmit = (event) => {
    if (errors.name || errors.email) {
      event.preventDefault();
    }
  };

  const changeUserDate = (e) => {
    const input = e.target;
    if (input.name === "name") {
      setUser({ ...user, name: input.value });

      // Validate
      if (input.value.length < 1) {
        setErrors({ ...errors, name: "Please enter a username" });
      } else if (input.value.length > 12) {
        setErrors({
          ...errors,
          name: "Username must be less than 12 characters",
        });
      } else {
        setErrors({
          ...errors,
          name: null,
        });
      }
    } else if (input.name === "email") {
      setUser({ ...user, email: input.value });

      // Validate
      if (input.value.length < 1) {
        setErrors({ ...errors, email: "Please enter an email" });
      } else {
        setErrors({
          ...errors,
          email: null,
        });
      }
    }
  };

  return (
    <Container>
      <Form noValidate>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <FloatingLabel
            controlId="floatingNameInput"
            label="Enter name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={user.name}
              name="name"
              onChange={(e) => changeUserDate(e)}
              required
              isValid={!errors.name}
              isInvalid={errors.name}
            />
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>

            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <FloatingLabel
            controlId="floatingEmailInput"
            label="Enter email"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={user.email}
              name="email"
              onChange={(e) => changeUserDate(e)}
              required
              isValid={!errors.email}
              isInvalid={errors.email}
            />
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>

            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default AddUserForm;
