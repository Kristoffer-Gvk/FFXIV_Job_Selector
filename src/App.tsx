//import { useState } from 'react'
import LayoutBase from "./assets/layout/layoutBase";
import "./index.css";

function App() {
  return (
    <>
      <div>
        <button>
          <img src="src/assets/setting-cogwheel.svg" />
        </button>
      </div>
      <div id="container">
        <LayoutBase></LayoutBase>
      </div>
    </>
  );
}

export default App;
