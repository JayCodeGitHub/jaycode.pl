import Link from "next/link";
import { Wrapper } from "./navbar.styles";

export default function NavBar() {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/experience">Experience</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </Wrapper>
  );
}
