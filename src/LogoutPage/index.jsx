import React from "react";

function LogoutPage() {
  const logout = (e) => {
    e.preventDefault();
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
