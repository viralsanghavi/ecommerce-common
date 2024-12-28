import ProductsGrid from "@/components/ProductsGrid";
import {searchProductsByName} from "@/sanity/products/searchProductsByName";
import React from "react";

async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{query: string}>;
}) {
  const {query} = await searchParams;
  const products = await searchProductsByName(query);
  console.log(products);
  if (!products.length)
    return (
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-sm w-full max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center">
            No Products Found for: {query}
          </h1>
          <p className="text-gray-600 text-center">
            Try Searching with different keywords
          </p>
        </div>
      </div>
    );
  return (
    <div className="flex flex-col items-center justify-top min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-sm w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb06 text-center">
          SearchPage for {query}
        </h1>
        <ProductsGrid products={products} />
      </div>
    </div>
  );
}

export default SearchPage;
