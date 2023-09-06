export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/", "/about/:path*", "/content", "/profile"],
  // matcher: ["/((?!register|api|login).*)"],
};
