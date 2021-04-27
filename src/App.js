import { useState, useEffect } from "react";
import Todos from "./components/Todos";

function App() {
  const getInitialMode = () => JSON.parse(window.localStorage.getItem("screen-mode")) || false;
  const [darkMode, setDarkMode] = useState(getInitialMode);
  //console.log(darkMode);

  const handleCheckboxChange = (event) => {
    setDarkMode(event.target.checked);
  };

  useEffect(() => {
    window.localStorage.setItem("screen-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <section className={`${darkMode ? "bg-dark text-white" : "bg-light"} min-vh-100`}>
      <div className="container my-4 form-check form-switch">
        <label className="form-check-label me-5 mt-4" htmlFor="activate">
          <input
            onChange={handleCheckboxChange}
            type="checkbox"
            className="form-check-input bg-secondary"
            id="activate"
          />{" "}
          Mode sombre ou clair ?
        </label>

        <h1 className="text-center mb-4">ToDos App</h1>
        <Todos />
      </div>
    </section>
  );
}

export default App;
