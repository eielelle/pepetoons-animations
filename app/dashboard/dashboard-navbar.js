export default function dashboardnav() {
  return (
    <nav className="bg-blue-400 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex justify-between text-white">Pepetoons</div>
        <ul className="flex flex-1 gap-4 justify-center items-center">
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300 hover:text-gray-300 flex items-center"
            >
              <img
                src="navbar-icons/home.png"
                alt="Home"
                className="mr-1"
                style={{ width: "20px", height: "20px" }}
              />
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300 hover:text-gray-300 flex items-center"
            >
              <img
                src="navbar-icons/binoculars.png"
                alt="Home"
                className="mr-1"
                style={{ width: "20px", height: "20px" }}
              />
              Explore
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300 hover:text-gray-300 flex items-center"
            >
              <img
                src="navbar-icons/information-button.png"
                alt="Home"
                className="mr-2"
                style={{ width: "20px", height: "20px" }}
              />
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300 hover:text-gray-300 flex items-center"
            >
              <img
                src="navbar-icons/contact.png"
                alt="Home"
                className="mr-2"
                style={{ width: "20px", height: "20px" }}
              />
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
