import "./styles.css";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const handleData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.userName === "crio" && data.password === "crio123") {
      setShow(true);
    } else {
      setError("Invalid username or password");
      setShow(false);
    }
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      {show ? (
        <p>Welcome, user</p>
      ) : (
        <form action="" onSubmit={handleSubmit}>
          <p>{" " && error}</p>
          <label htmlFor="userName">Username:</label>
          <input
            type="text"
            name="userName"
            value={data.userName}
            id="userName"
            onChange={handleData}
            required
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={data.password}
            name="password"
            id="password"
            onChange={handleData}
            required
          />
          <br />
          <button type="submit">submit</button>
        </form>
      )}
    </div>
  );
}
