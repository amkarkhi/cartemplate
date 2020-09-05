import React from "react";
import "./style.css";
const Header = () => {
  const pages = [
    { title: "home", route: "home" },
    { title: "home", route: "home" },
    { title: "home", route: "home" },
    { title: "home", route: "home" },
  ];
  return (
    <div class="header">
      {pages.map((item, index) => {
        const paginationFunction = () => {
          alert(`goTo ${item.route}`);
        };
        return (
          <div class="headertitle">
            <span onClick={paginationFunction}>{item.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
