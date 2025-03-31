export default function Footer() {
  return (
<footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 border-t-4 border-primary">
  <aside>
    <span className="bg-primary text-white text-2xl font-bold p-2 rounded">pepetoons</span>
    <p>
      <br />
      All Rights Reserved 2025
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">About Pepetoons</h6>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Explore the Museum</a>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Meet the Team</a>
  </nav>
  <nav>
    <h6 className="footer-title">Biography</h6>
    <a className="link link-hover">Arrest</a>
    <a className="link link-hover">Education</a>
    <a className="link link-hover">Monuments</a>
    <a className="link link-hover">Family</a>
  </nav>
  <nav>
    <h6 className="footer-title opacity-0">A</h6>
    <a className="link link-hover">Writings</a>
    <a className="link link-hover">Romantic Life</a>
    <a className="link link-hover">Travels</a>
  </nav>
</footer>
  );
}
