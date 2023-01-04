import Birthdays from "./pages/Birthdays";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Birthdays></Birthdays>}></Route>
    </Routes>
  );
}
export default App;
