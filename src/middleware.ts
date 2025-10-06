import createMiddleware from 'next-intl/middleware';
import { routing } from './config/navigation';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(es|en)/:path*']
};
