import { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./views/home";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [session, setSession] = useState(false);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem("item") === null) {
      localStorage.setItem("item", true);
      setSession(true);
    } else {
      setSession(localStorage.getItem("item"));
    }
  }, []);

  const handleSession = () => {
    if (inputValue.length > 0) {
      setSession(!session);
    }
  };

  return (
    <>
      <div>
        {session ? (
          <Home nombre={inputValue} />
        ) : (
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
        )}
      </div>
    </>
  );
}

export default App;
