import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
