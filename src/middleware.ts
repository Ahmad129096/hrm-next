export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/about/:path*",
    "/content",
    "/profile",
    "/addemployees/:path*",
  ],
  // matcher: ["/((?!register|api|login).*)"],
};
