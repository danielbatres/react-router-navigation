import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../auth";

function Menu() {
  const auth = useAuth(); 

  const routes = [
    { to: "/", text: "Home", private: false },
    { to: "/blog", text: "Blog", private: false },
    { to: "/profile", text: "Profile", private: !auth.user },
    { to: "/login", text: "Login", private: !!auth.user },
    { to: "/logout", text: "Logout", private: !auth.user },
  ];

  return (
    <nav>
      <ul>
        {routes.map((route) => {
          if (route.private) return null;

          return (
            <li key={route.to}>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "red" : "blue",
                })}
                to={route.to}
              >
                {route.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export { Menu };
