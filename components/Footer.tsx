const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-600">
              Sacred Heart E M H S S<br />
              Moolamattom<br />
              Kerala, India
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-600 hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="/events" className="text-gray-600 hover:text-gray-900">
                  Events
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-600 hover:text-gray-900">
                  Gallery
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <p className="text-gray-600">
              Stay connected with your alma mater and fellow alumni.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Alumni Of The Sacreds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;