// /app/components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <h1>Roadmap App</h1>
      <nav>
        <Link href="/login">Login</Link>
        <Link href="./auth/register">Register</Link>
        <Link href="./roadmaps">Roadmaps</Link>
      </nav>
    </header>
  );
};

export default Header;