import {validatePreviewUrl} from "@sanity/preview-url-secret";
import {client} from "@/sanity/lib/client";
import {redirect} from "next/navigation";
import {draftMode} from "next/headers";

const token = process.env.SANITY_API_READ_TOKEN;
export const POST = async (request: Request) => {
  const {isValid, redirectTo = "/"} = await validatePreviewUrl(
    client.withConfig({token}),
    request.url
  );
  if (!isValid) return new Response("Invalid Secret", {status: 401});
  (await draftMode()).enable();

  redirect(redirectTo);
};
