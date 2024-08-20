import Link from "next/link";
export default function Product() {
  const productid = 100; //dynamic
  return (
    <>
      <div>
        <Link href="/">Home</Link>
        <h1>Product items</h1>
        <h2>
          <Link href="dynamic/1">product1</Link>
        </h2>
        <h2>
          <Link href="dynamic/2">product2</Link>
        </h2>
        <h2>
          <Link href="dynamic/3" replace>product3</Link>
        </h2>
        <h2>
          <Link href={`dynamic/${productid}`}>product {productid}</Link>
        </h2>
      </div>
    </>
  );
}
//replace -> root page