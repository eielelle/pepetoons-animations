export default function header() {
  return (
    <nav className="bg-yellow-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl">Pepetoons</div>
        <div className="hidden lg:flex flex-1 justify-center space-x-10 items-center">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Blog
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </div>
      </div>
      <div id="menu" className="hidden lg:hidden">
        <a href="#" className="block text-white p-2">
          Home
        </a>
        <a href="#" className="block text-white p-2">
          About
        </a>
        <a href="#" className="text-white">
          Blog
        </a>
        <a href="#" className="block text-white p-2">
          Contact
        </a>
      </div>
    </nav>
  );
}
