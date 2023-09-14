export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/content",
    "/profile",
    "/userrole",
    "/about/:path*",
    "/employees/:path*",
    "/application/:path*",
    "/employeeRestrictions",
  ],
  // matcher: ["/((?!register|api|login).*)"],
};
