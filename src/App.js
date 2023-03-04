import Navbar from "./navbar/navbar";
import Link from "./link/link";
import Users from "./users/users";
import UsersFunctional from "./users/usersFunctional";
import AddUserForm from "./users/addUser";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Link name="Home" link="link_1" />
      <Users />
      <UsersFunctional />
      <AddUserForm />
    </div>
  );
}

export default App;
