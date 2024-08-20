import Product from "@/components/product";
import ProductReview from "@/components/review";
import { Suspense } from "react";

export default function ProductDetails() {
  return (
    <>
      <h1>Product Details</h1>
      <Suspense fallback={<p>Loading product review components ...........</p>}>
        <ProductReview />
      </Suspense>
      <Suspense fallback={<p>Loading product details ............ </p>}>
        <Product />
      </Suspense>
    </>
  );
}
