import React from "react";
import Contador from "./components/Contador";

function App() {
  return (
    <div className="container">
      <div
        className="fondo"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/images/fondo.jpg')`,
        }}
      ></div>
        <Contador></Contador>
    </div>
  );
}

export default App;
