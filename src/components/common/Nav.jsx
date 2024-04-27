import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <header>
      <article>
        <h1>
          <a href="/">
            Northwest <span>Animal Hospital</span>
          </a>
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            <a href="/staff">All Staff</a>
          </li>
          <li>
            <a href="/pets">All Pets</a>
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
