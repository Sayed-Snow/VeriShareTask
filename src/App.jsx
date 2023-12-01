import { Link, Outlet } from "react-router-dom"
import Router from "./Router"

export default function App() {

  return (
    <>
      <div class="flex justify-center space-x-4 mt-20">
      <Link to="/signup">
        <button class="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg">Sign Up</button>
        </Link>
        <Link to="/autocomplete">
        <button class="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg">Autocomplete</button>
        </Link>
      </div>
      <Outlet />
    </>
  )
}