import {defineQuery} from "next-sanity";
import {sanityFetch} from "../lib/live";

export const getProductsByCategory = async (categorySlug: string) => {
  const PRODUCTS_BY_CATEGORIES_QUERY = defineQuery(`
        *[_type=="product" && references(*[_type=="category" && slug.current == $categorySlug]._id)]| order(name asc)`);
  try {
    const products = await sanityFetch({
      query: PRODUCTS_BY_CATEGORIES_QUERY,
      params: {
        categorySlug,
      },
    });
    return products.data || [];
  } catch (error) {
    console.error("Error Fetching products by category name", error);
    return [];
  }
};
