import { Routes, Route } from "react-router-dom";
import HomePage from "./Component/Home/HomePage";
import SignUp from "./Component/SignUp/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  );
}

export default App;
