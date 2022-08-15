import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Auth } from "./pages/Auth/Auth";
import { Home } from "./pages/Home/Home";
//const code = new URLSearchParams(window.location.search).get("code");
function App() {
  const [code, setCode] = useState(null);

  useEffect(() => {
    if (!code) {
      const code = new URLSearchParams(window.location.search).get("code");
      setCode(code);
    }
  }, []);
  return (
    <div className="width-100 flex-center">
      {code ? <Home code={code} /> : <Auth />}
    </div>
  );
}

export default App;
