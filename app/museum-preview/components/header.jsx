export default function Header({ color = "black" }) {

    return <header className={`flex justify-between items-center pt-5 pb-2 text-${color}`}>
        <span className="logo flex items-center gap-3"><span className={`square bg-${color} inline-block`} style={{width: '30px', height: '30px'}}></span> Museum Preview</span>
        <span>Life and Works of Rizal: Virtual Museum</span>
        <span className="text-white">pepetoons animations © 2025</span>
    </header>
}