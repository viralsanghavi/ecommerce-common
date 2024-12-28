import {draftMode} from "next/headers";
import {NextResponse} from "next/server";

export const POST = async (request: Request) => {
  (await draftMode()).disable();
  return NextResponse.redirect(new URL("/", request.url));
};
