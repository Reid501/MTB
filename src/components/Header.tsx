import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-500 flex justify-center py-5">
      <nav className="w-4/5 justify-between flex ">
        <div>
          <h1 className="text-slate-200">MTB</h1>
        </div>
        <ul className="flex">
          <li className="text-slate-200">
            <Link href="/">Home</Link>
          </li>
          <li className="text-slate-200 ml-10">
            <Link href="/news">News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
