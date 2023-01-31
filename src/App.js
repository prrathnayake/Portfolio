import MainPage from "./pages/mainPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Error404 from "./pages/error404";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
