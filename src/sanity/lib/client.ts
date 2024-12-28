import {createClient} from "next-sanity";

import {apiVersion, dataset, projectId} from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  stega: {
    // studioUrl: "http://locahost:3000/studio",
    studioUrl:
      process.env.NODE_ENV === "production"
        ? `https://${process.env.VERCEL_URL}/studio`
        : `http://${process.env.NEXT_PUBLIC_BASE_URL}:3000/studio`,
  },
});
