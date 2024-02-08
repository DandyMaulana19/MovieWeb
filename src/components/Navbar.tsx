import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex p-4 bg-sky-800">
        <h1 className="w-1/5 text-3xl font-bold text-white ">Movie App</h1>
        <div className="flex items-center justify-center w-3/5 gap-10">
          <NavLink className="inline-block" to="/">
            Dashboard
          </NavLink>
          <NavLink className="inline-block" to="/movies">
            Movies
          </NavLink>
          <NavLink className="inline-block" to="/about">
            About
          </NavLink>
        </div>
        <div className="flex justify-end w-1/5 ">
          <button className="px-3 py-2 bg-white rounded-xl">Login</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
