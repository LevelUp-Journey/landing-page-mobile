import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is valid, default to 'es'
  const validLocale = locale && ['en', 'es'].includes(locale) ? locale : 'es';

  const messages = await import(`../messages/${validLocale}.json`);
  return {
    locale: validLocale,
    messages: messages.default
  };
});