import Navbar from "./navbar/navbar";
import Link from "./link/link";
import Users from "./users/users";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Link name="Home" link="link_1" />
      <Users />
    </div>
  );
}

export default App;
