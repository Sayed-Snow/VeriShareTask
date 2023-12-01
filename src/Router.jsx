import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Calculator from "./pages/Calculator";
import Singup from "./pages/Signup";
import Autocomplete from "./pages/Autocomplete";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route path="/" element={<App />} />
          <Route path="autocomplete" element={<Autocomplete />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="signup" element={<Singup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
