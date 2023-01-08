import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages and components
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import RhetRolePage from "./components/RhetRolePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/rhet" element={<RhetRolePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
