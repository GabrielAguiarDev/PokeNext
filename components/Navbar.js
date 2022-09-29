import Link from "next/link";
import Image from "next/image";

import styled from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styled.navbar}>
      <Link href="/">
        <div className={styled.logo}>
          <Image
            src="/images/pokeball.png"
            width="30"
            height="30"
            alt="PokeNext"
          />
          <h1>PokeNext</h1>
        </div>
      </Link>
      <ul className={styled.link_items}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Sobre</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
