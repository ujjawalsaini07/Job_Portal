import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 left-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 tracking-tighter">
          SmartHire
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Home</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Find Jobs</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Companies</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">About</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Contact</li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link 
            to="/login" 
            className="text-gray-600 font-medium hover:text-blue-600 px-4 py-2 transition-colors"
          >
            Login
          </Link>
          <Link 
            to="/register" 
            className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg font-medium"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;