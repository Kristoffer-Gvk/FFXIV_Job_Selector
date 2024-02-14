//import { useState } from 'react'
import LayoutBase from "./assets/layout/layoutBase";
import cogwheel from "./assets/setting-cogwheel.svg";
import "./index.css";

function App() {
  return (
    <>
      <div id="settings-btn">
        <button>
          <img src={cogwheel} height={32} width={32} />
        </button>
      </div>
      <div id="container">
        <LayoutBase />
      </div>
      <div></div>
    </>
  );
}

export default App;
