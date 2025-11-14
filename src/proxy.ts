import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export const proxy = createMiddleware(routing);

// Alternatively, you can use a default export:
export default proxy;

export const config = {
    // Match only internationalized pathnames
    matcher: ["/", "/(es|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
