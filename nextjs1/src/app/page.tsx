
import Link from "next/link"
export default function Home() {
  return (
    <main className="text-center">
     <h1 className="text-red-500 text-lg">welcome to Home page</h1>
     <Link href="/blog">Blog</Link>
     <Link href="/dynamic">Product</Link>
    </main>
  );
}
