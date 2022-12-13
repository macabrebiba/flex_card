import React from "react";
import "./App.css";
import Routes from "./routes/routes";
import ErrorMessage from "./pages/ErrorMessage";
function App() {
  let w = window.innerWidth;
  console.log(w);
  return (
    <div className="App">
      {w > 500 && <ErrorMessage />}
      {w < 500 && <Routes />}
    </div>
  );
}

export default App;
