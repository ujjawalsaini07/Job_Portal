function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-9xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand + Social */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600">JobFinder</h2>
          <p className="mt-3 text-gray-500 text-sm">
            Connecting talent with opportunity.
          </p>

          <div className="mt-4">
            <p className="font-semibold text-gray-700 mb-2">Connect with us</p>
            <div className="flex gap-3 text-gray-500 text-xl">
              <span className="cursor-pointer hover:text-blue-600">📘</span>
              <span className="cursor-pointer hover:text-pink-500">📸</span>
              <span className="cursor-pointer hover:text-blue-700">💼</span>
              <span className="cursor-pointer hover:text-black">❌</span>
            </div>
          </div>
        </div>

        {/* Column 1 */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Employer Home</li>
            <li>Sitemap</li>
            <li>Credits</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>Help Center</li>
            <li>Summons / Notices</li>
            <li>Grievances</li>
            <li>Report Issue</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Fraud Alert</li>
            <li>Trust & Safety</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-3">
        <p>© 2026 JobFinder. All rights reserved.</p>
        <p className="font-medium">
          Made with <span className="text-red-500">❤️</span> by{" "}
          <span className="text-blue-600 font-semibold">Ujjawal Saini</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
