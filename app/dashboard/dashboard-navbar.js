export default function dashboardnav(){
    return (
        <nav className="bg-blue-400 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex justify-between text-white">Pepetoons</div>
                <ul className="flex flex-1 gap-4 justify-center items-center">
                    <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">Dashboard</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">About</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">contact</a></li>
                </ul>
            </div>
        </nav>
    )
}