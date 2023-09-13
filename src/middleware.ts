export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/", "/about/:path*", "/content", "/profile", "/employees/:path*"],
  // matcher: ["/((?!register|api|login).*)"],
};
