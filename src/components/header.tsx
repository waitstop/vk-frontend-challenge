import { Link } from "@tanstack/react-router";

export default function Header(): React.ReactNode {
  return (
    <header className="bg-blue-500 shadow-[0_5px_12px_0_rgba(0,0,0,0.5)] sticky top-0 left-0 z-50">
      <nav className="flex container mx-auto text-white">
        <Link
          to="/"
          className="transition-all block py-4 px-6 hover:bg-black/10"
          href=""
        >
          Все котики
        </Link>
        <Link
          to="/favorites"
          className="transition-all block py-4 px-6 hover:bg-black/10"
          href=""
        >
          Любимые котики
        </Link>
      </nav>
    </header>
  );
}
