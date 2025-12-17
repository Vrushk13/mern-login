import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard({ setAuth }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/auth/dashboard", {
      headers: { "x-auth-token": localStorage.getItem("token") }
    })
    .then((res) => setUser(res.data.user))
    .catch(() => setAuth(false));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>
      {user && <h3>Welcome {user.name}</h3>}
      <button onClick={() => {
        localStorage.removeItem("token");
        setAuth(false);
      }}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
