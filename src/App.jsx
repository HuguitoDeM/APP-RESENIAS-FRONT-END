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
    const storedItem = localStorage.getItem("SaltarInicio");
    if (storedItem !== null) {
      setSession(storedItem);
    }
  }, []);

  const handleSession = () => {
    if (inputValue.length > 0) {
      setSession(!session);
      localStorage.setItem("SaltarInicio", true);
    }
  };

  return (
    <>
      <div>
        {session ? (
          <Home nombres={inputValue} />
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
