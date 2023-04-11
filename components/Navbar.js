import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <ul>
      <li>
        <Link href="/home">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Index</a>
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;