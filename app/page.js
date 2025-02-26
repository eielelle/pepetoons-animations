import Image from "next/image";
import Dashboardnav from "./dashboard/dashboard-navbar";
import Dashboardcontent from "./dashboard/dashboard-content";

export default function Home() {
  return (
    <div>
      <Dashboardnav/>
      <Dashboardcontent/>
    </div>
  );
}
