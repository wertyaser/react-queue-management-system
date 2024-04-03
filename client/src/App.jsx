import { useEffect } from "react";
import Login from "./pages/Login";

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="mx-auto">
        <Login className="" />
      </div>
    </>
  );
}

export default App;
