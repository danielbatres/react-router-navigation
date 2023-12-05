import React, { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");

  const login = (e) => {
    e.preventDefault();

    console.log(username);
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={login}>
        <label>Enter your username:</label>
        <input value={username} onChange={e => setUsername(e.target.value)}/>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export { LoginPage };
