import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || 'es';

  return {
    locale,
    messages: {
      ...(await import(`./${locale}/common.json`)).default,
      ...(await import(`./${locale}/menu.json`)).default,
    },
  };
});
