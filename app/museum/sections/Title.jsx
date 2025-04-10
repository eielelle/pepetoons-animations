export default function Title({ setPos }) {
  return (
    <div className="absolute top-0 right-0 z-50 w-1/2 p-5 h-full opacity-70 bg-black">
      <h1>Life and Works of Rizal</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit eius
        necessitatibus magnam molestias aspernatur quaerat nobis omnis fugiat
        incidunt dignissimos?
      </p>
      <button
        onClick={() => {
          alert("CLICKED");
          setPos((prevState) => {
            return {
              ...prevState,
              pos: [-0.06, 1.55, 0.17],
            };
          });
        }}
      >
        Explore
      </button>
    </div>
  );
}
