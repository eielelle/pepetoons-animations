import Image from "next/image";
import Dashboardnav from "./dashboard/dashboard-navbar";
import Dashboardcontent from "./dashboard/dashboard-content";
import Legacycontent from "./legacy/legacy-content";

export default function Home() {
  return (
    <div>
      {/*UNCOMMENT THIS IF YOU WANT TO SHOW THE DASHBOARD*/}
      {/*<Dashboardnav*/}
      {/*<Dashboardcontent/>*/}

      {/*UNCOMMENT THIS IF YOU WANT TO SHOW THE LEGACY*/}
      {/*<Dashboardnav*/}
      {/*<Legacycontent />*/}
      <Legacycontent />
    </div>
  );
}
