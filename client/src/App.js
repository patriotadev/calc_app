import Main from "./pages/Main";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={'/'} element={<Main/>}></Route>
          <Route path={'/login'} element={<Login/>}></Route>
          <Route path={'/register'} element={<Register/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
