import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Calculator from "./pages/Calculator";
import Login from "./pages/Login";
import Autocomplete from "./pages/Autocomplete";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route path="/" element={<App />} />
          <Route path="autocomplete" element={<Autocomplete />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
