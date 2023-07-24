import React from "react";

import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Our Team</a>
          </li>
          <li>
            <a href="#">Make Inquiry</a>
          </li>
        </ul>
      </nav>

      <button className="btn btn-outline">
        Contact Us
        {/* right arrow */}
        {/* <span className="icon">&rarr;</span> */}
      </button>
    </header>
  );
}
