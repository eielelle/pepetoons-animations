export default function TimelineItem({ children, caption, top }) {
  let pos = top ? "timeline-start" : "timeline-end";

  return (
    <li className="w-1/2 lg:w-1/3">
      <hr className="bg-white" />
      <div className="timeline-start font-black text-2xl text-white">
        {caption}
      </div>
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-award"
        >
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      </div>
      <div className={`${pos} timeline-box text-white text-lg bg-red-950`}>{children}</div>
      <hr className="bg-white" />
    </li>
  );
}
