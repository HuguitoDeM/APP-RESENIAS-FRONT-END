import { useState } from "react";
import "./App.css";
import { Home } from "./views/home";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [session, setSession] = useState(true);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSession = () => {
    if (inputValue.length > 0) {
      setSession(!session);
    }
  };

  return (
    <>
      <div>
        {session ? (
          <div className="sessionDiv">
            <label htmlFor="nombre" className="sessionLabel">
              Nombre:{" "}
            </label>
            <input
              className="sessionInput"
              type="text"
              id="nombre"
              value={inputValue}
              onChange={handleChange}
            />
            <button onClick={handleSession} className="sessionButton">
              Ingresar
            </button>
          </div>
        ) : (
          <Home nombre={inputValue} />
        )}
      </div>
    </>
  );
}

export default App;
