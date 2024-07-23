import React from "react";
import "../styles/main.css";
function Main() {
  return (
    <main className="main">
      <h1 className="heading"> Fun facts about react</h1>
      <ul className="lists">
        <li className="list-item">Was first released in 2013</li>
        <li className="list-item">Was originally created by Jordan Walke</li>
        <li className="list-item">Has well over 100k stars on GitHub</li>
        <li className="list-item">Is maintained by Meta</li>
        <li className="list-item">
          Powers thousands of enterprise apps, including mobile apps
        </li>
      </ul>
    </main>
  );
}
export default Main;
