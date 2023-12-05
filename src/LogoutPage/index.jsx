import React from "react";
import { useAuth } from "../auth";

function LogoutPage() {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();

    auth.logout();
  }

  return (
    <>
      <h1>Logout</h1>
      <form onSubmit={logout}>
        <label>Are you sure you want to logout?</label>
        <button type="submit">Logout</button>
      </form>
    </>
  );
}

export { LogoutPage };
