import {defineQuery} from "next-sanity";
import {sanityFetch} from "../lib/live";

export const searchProductsByName = async (searchParam: string) => {
  const searchProductByQuery = defineQuery(`
        *[_type=="product" && name match $searchParam]| order(name asc)
        `);

  try {
    const products = await sanityFetch({
      query: searchProductByQuery,
      params: {
        searchParam: `${searchParam}*`,
      },
    });
    return products.data || [];
  } catch (error) {
    console.error("Failed to Fetch Product by name", error);
    return [];
  }
};
