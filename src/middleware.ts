import { NextRequest } from "next/server";
import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export async function middleware(request: NextRequest) {
    return createMiddleware(routing)(request);
}

export const config = {
    // Match all pathnames except for
    // - … if they start with `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    matcher: '/((?!webhooks|_next|_vercel|.*\\..*).*)'
};