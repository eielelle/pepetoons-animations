import Image from "next/image";
import Dashboardnav from "./dashboard/dashboard-navbar";
import Dashboardcontent from "./dashboard/dashboard-content";
import Legacycontent from "./legacy/legacy-content";


export default function App() {
  return (
    <>
     <div>
      {/*UNCOMMENT THIS IF YOU WANT TO SHOW THE DASHBOARD*/}
      {/*<Dashboardnav*/}
     {/*<Dashboardcontent/>*/}
     </div>

    {/* Uncomment this in case the header won't needed */}
    
      <Header />
      <Legacycontent />
  
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/sibling" element={<Sibling />} />
        <Route path="/fapp" element={<Fapp />} />
      </Routes>
    </BrowserRouter>
    
    
    </>
  );
}
