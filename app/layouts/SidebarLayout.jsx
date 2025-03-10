import Sidebar from "../components/sidebar";

export default function SidebarLayout({ children }) {
    return <div className="flex">
        <Sidebar />
        <div className="flex-1">
            { children }
        </div>
    </div>
}