import Homepage from "./homepage/homepage";
import Arrest from "./arrest/arrest";

export default function Home() {
  return (
    // I remove the padding to make the homepage content full height/width
    <div className="flex-1">
      {/*<h1 className="text-2xl font-bold mb-4">Welcome to PepeToons</h1>
        <p className="mb-4">
          Select an option from the sidebar to get started.
        </p> */}

      {/* Comment/Uncomment this, in case the Homepage won't needed */}
      {/* <Homepage /> */}
      <Arrest />


      {/* UNCOMMENT THIS IF YOU WANT TO SHOW THE DASHBOARD */}
      {/* <Dashboardnav /> */}
      {/* <Dashboardcontent /> */}

      {/* Uncomment this in case the header won't needed */}
      {/* <Header /> */}
      {/*<Legacypage />*/}
    </div>
  );
}