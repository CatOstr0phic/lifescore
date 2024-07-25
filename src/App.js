import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {

  return (
    <Router>
      <div className="">
        <Home />
        <Routes>
  
          {/* <Route path="/login" element={<Login />} /> */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
