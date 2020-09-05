import React, { useEffect, useState } from "react";
import "./tempStyle.css";
import Header from "../Component/Header";
function Template({ children }) {
  return (
    <div class="wholePage">
      <Header />

      <div class="templateContainer">
        <div class="mainPageTemp">{children}</div>
      </div>
    </div>
  );
}

export default Template;
