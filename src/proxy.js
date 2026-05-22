import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "./lib/auth";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/login", request.url));
}
export default proxy;
export const config = {
  matcher: ["/rooms/new", "/rooms/self", "/rooms/bookings", "/rooms/:path"],
};
