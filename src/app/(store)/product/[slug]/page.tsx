import {getProductBySlug} from "@/sanity/products/getProductBySlug";
import React from "react";

const ProductPage = async ({params}: {params: Promise<{slug: string}>}) => {
  const {slug} = await params;
  const product = await getProductBySlug(slug);
  return <div>ProductPage</div>;
};

export default ProductPage;
