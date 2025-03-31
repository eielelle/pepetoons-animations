export default function Header() {
    return (
        <header className="navbar fixed top-0 left-0 w-full z-50">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl bg-primary">pepetoons</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="border-b-2 border-primary"><a>Home</a></li>
            <li><a>Explore the Museum</a></li>
            <li><a>About</a></li>
            <li><a>Meet the Team</a></li>
            
          </ul>
        </div>
      </header>
    )
}