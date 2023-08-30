import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}