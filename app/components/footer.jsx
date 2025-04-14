import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 border-t-4 border-primary">
      <aside>
        <a className="p-2" href="/">
          <Image src={"/logo.png"} alt={"logo"} width={150} height={150} />
        </a>
        <p>
          <br />
          All Rights Reserved 2025
        </p>
      </aside>
      <nav>
        <h6 className="footer-title normal-case">About Pepetoons</h6>
        <a className="link link-hover" href="/home">
          Home
        </a>
        <a className="link link-hover">Explore the Museum</a>
        <a className="link link-hover" href="/about">
          About
        </a>
        <a className="link link-hover" href="/team">
          Meet the Team
        </a>
      </nav>
      <nav>
        <h6 className="footer-title normal-case">Biography</h6>
        <a className="link link-hover" href="/arrest">
          Arrest
        </a>
        <a className="link link-hover" href="/education">
          Education
        </a>
        <a className="link link-hover" href="/exile">
          Monuments
        </a>
        <a className="link link-hover" href="/family">
          Family
        </a>
      </nav>
      <nav>
        <h6 className="footer-title opacity-0">A</h6>
        <a className="link link-hover" href="/works">
          Writings
        </a>
        <a className="link link-hover" href="/romantic-life">
          Romantic Life
        </a>
        <a className="link link-hover" href="/visit">
          Travels
        </a>
      </nav>
    </footer>
  );
}
