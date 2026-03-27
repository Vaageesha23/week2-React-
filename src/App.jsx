import Header from "./components/Header";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const user = {
    name: "Vaageesha",
    email: "vaageesha23@gmail.com",
    role: "Frontend Developer",
  };

  const { name, email, role} = user;

  return (
    <div className="app">
      <Header />
      <UserCard name={name} email={email} role={role}/>
    </div>
  );
}

export default App;