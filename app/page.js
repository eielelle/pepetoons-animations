import Image from "next/image";
import Dashboardnav from "./dashboard/dashboard-navbar";
import Dashboardcontent from "./dashboard/dashboard-content";
import Legacycontent from "./legacy/legacy-content";
import Headers from "./components/Header";

export default function Home() {
  return (
    // <div>
    //   {/*UNCOMMENT THIS IF YOU WANT TO SHOW THE DASHBOARD*/}
    //   {/*<Dashboardnav*/}
    //   {/*<Dashboardcontent/>*/}
    // </div>

    //Uncomment this in case the header won't needed
    <>
      <Headers />
      <Legacycontent />
    </>
  );
}
