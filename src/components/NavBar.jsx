function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          JobFinder
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Find Jobs</li>
          <li className="hover:text-blue-600 cursor-pointer">Companies</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="text-gray-700 font-medium hover:text-blue-600">
            Login
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
