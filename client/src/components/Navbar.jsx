import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/ContextProvider";

const Navbar = ({ setQuery }) => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md p-4 flex flex-wrap items-center justify-between gap-4">
      {/* Logo */}
      <Link to="/" className="text-3xl font-bold text-blue-600">
        Notely
      </Link>

      {/* Search */}
      <input
        type="text"
        placeholder="Search notes..."
        className="flex-1 min-w-[200px] px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* User Actions */}
      <div className="flex items-center gap-4">
        {!user ? (
          <>
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-700 transition"
            >
              Signup
            </Link>
          </>
        ) : (
          <>
            <span className="text-gray-700 font-medium">{user.name}</span>
            <button onClick={logout} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              {" "}
              Logout{" "}
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
