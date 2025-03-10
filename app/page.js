export default function Home() {
  return (
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to PepeToons</h1>
        <p className="mb-4">
          Select an option from the sidebar to get started.
        </p>

        {/* UNCOMMENT THIS IF YOU WANT TO SHOW THE DASHBOARD */}
        {/* <Dashboardnav /> */}
        {/* <Dashboardcontent /> */}

        {/* Uncomment this in case the header won't needed */}
        {/* <Header /> */}
        {/* <Legacycontent /> */}
      </div>
  );
}
