import {defineQuery} from "next-sanity";
import {CouponCode} from "./couponCodes";
import {sanityFetch} from "../lib/live";

export const getActiveSaleByCouponCode = async (couponCode: CouponCode) => {
  const ACTIVE_SALE_BY_COUPON_QUERY = defineQuery(`
        *[
            _type=="sale"
        && isActive == true
        && couponCode == $couponCode
        ] | order(validFrom desc)[0]

        `);
  try {
    const activeSale = await sanityFetch({
      query: ACTIVE_SALE_BY_COUPON_QUERY,
      params: {
        couponCode,
      },
    });
    console.log(activeSale);
    return activeSale ? activeSale.data : null;
  } catch (error) {
    console.error("Error Fetching active sale by coupon code", error);
    return null;
  }
};

// {
//     _id,
//     title
//     description,
//     discountAmount,
//     couponCode,
//     validFrom,
//     validUntil,
//     isActive
// }
