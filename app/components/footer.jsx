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
        <ul className="list-disc list-inside">
          <li>
            <a className="link link-hover" href="/home">
              home
            </a>
          </li>
          <li>
            <a className="link link-hover">explore the museum</a>
          </li>
          <li>
            <a className="link link-hover" href="/about">
              about
            </a>
          </li>
          <li>
            <a className="link link-hover" href="/team">
              meet the team
            </a>
          </li>
        </ul>
      </nav>
      <nav>
        <h6 className="footer-title normal-case">Biography</h6>
        <ul className="list-disc list-inside">
          <li>
            <a className="link link-hover" href="/family">
              family
            </a>
          </li>
          <li>
            <a className="link link-hover" href="/education">
              education
            </a>
          </li>
          <li>
            <a className="link link-hover" href="/romantic-life">
              romantic Life
            </a>
          </li>
          <li>
            <a className="link link-hover" href="/visit">
              travels
            </a>
          </li>
        </ul>
      </nav>
      <nav>
        <h6 className="footer-title opacity-0">A</h6>
        <ul className="list-disc list-inside">
          <li>
            <a className="link link-hover" href="/works">
              writings
            </a>
          </li>
          <li>
            <a className="link link-hover" href="/arrest">
              arrest
            </a>
          </li>
          <li>
            <a className="link link-hover" href="/exile">
              monuments
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
