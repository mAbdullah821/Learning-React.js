import { useState, useEffect } from "react";
import shortid from "shortid";
import { Button } from "react-bootstrap";

export default function UsersFunctional() {
  const [users, setUsers] = useState([
    { name: "me", age: 12, display: true },
    { name: "do not display", age: 13, display: false },
    { name: "memo", age: 15, display: true },
    { name: "do not display", age: 16, display: false },
    { name: "nemo", age: 17, display: true },
  ]);

  const [isAuth, setIsAuth] = useState(true);

  useEffect(() => {
    console.log("From componentDidMount");
    return () => {
      console.log("From componentWillUnmount");
    };
  }, []);

  useEffect(() => {
    console.log("From componentDidUpdate");
    return () => {
      console.log("From componentWillUnmount");
    };
  }, [isAuth]);

  return (
    <>
      {/* First example */}
      {isAuth &&
        users.map((user) => {
          if (user.display) {
            const key = shortid.generate();
            return <button key={key}>Hello, {key}</button>;
          }
        })}
      {/* Second example */}
      <ul>
        {isAuth ? (
          users.map((user) => {
            const key = shortid.generate();
            return (
              <li key={key}>
                Welcome, {user.name} with {user.age} years old, and key = {key}
              </li>
            );
          })
        ) : (
          <h1> Please Login </h1>
        )}
      </ul>
      {/* Separator Comment */}
      <div className="d-grid gap-2">
        <Button variant="success" size="lg" onClick={() => setIsAuth(!isAuth)}>
          Toggle isAuth
        </Button>
      </div>
    </>
  );
}
