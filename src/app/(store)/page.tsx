import BlackFridayBanner from "@/components/BlackFridayBanner";
import ProductsView from "@/components/ProductsView";
import {Button} from "@/components/ui/button";
import {getAllCategories} from "@/sanity/categories/getAllCategories";
import {getAllProducts} from "@/sanity/products/getAllProducts";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  // console.log(
  //   crypto.randomUUID().slice(0,5) + `>>> Rerendered the home page cache with ${products.length} products and ${categories.length} categories`
  // );

  return (
    <div className="">
      <BlackFridayBanner />
      {/* redner all the products */}
      <div>
        <ProductsView products={products} categories={categories} />
      </div>
   </div>
  );
}
