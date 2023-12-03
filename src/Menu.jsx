import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => ""}
            style={({ isActive }) => ({
              color: isActive ? "red" : "blue",
            })}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "red" : "blue",
            })}
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "red" : "blue",
            })}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}


export { Menu };
