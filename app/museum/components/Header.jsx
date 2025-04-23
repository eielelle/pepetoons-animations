import {useState} from "react";
import Image from "next/image";
import { Home, Eye, X } from "react-feather";
import Link from 'next/link'

export default function Header({hide}) {
  const [isHidden, setIsHidden] = useState(false);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
    hide();
  };

  return (
    <header className="navbar">
      <div className="flex-1">
        <Image src={"/logo.png"} alt={"logo"} width={150} height={150} />
      </div>
      <div className="flex-none flex gap-4">
        <button className="btn btn-square bg-[#C66030]" onClick={toggleVisibility}>{isHidden ? <X /> : <Eye />}
        </button>
        <Link href="/home" className="btn btn-square bg-[#C66030]">
        <Home />
        </Link>
      </div>
    </header>
  );
}
