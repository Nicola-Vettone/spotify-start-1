import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";

import Player from "./components/Player";
import TopBar from "./components/TopBar";
import { Alert } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopBar />} />
        <Route
          path="*"
          element={
            <Alert className="mt-3 text-center" variant="danger">
              Error 404-dati non disponibili
            </Alert>
          }
        />
      </Routes>
      <Player />
    </BrowserRouter>
  );
}

export default App;
