import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
