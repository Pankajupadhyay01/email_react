import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";


const App = () => {
  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mail/:data" element={"ok"} />
        </Routes>
      </BrowserRouter >
    </div>
  )
}

export default App
