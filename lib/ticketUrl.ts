const BASE_TICKET_URL = 'https://www.tiqs.com/alfred/upcoming_events/217350';

export function buildTicketUrl(extraParams?: Record<string, string>): string {
  const url = new URL(BASE_TICKET_URL);

  url.searchParams.set('utm_source', 'curfew_website');
  url.searchParams.set('utm_medium', 'cta');
  url.searchParams.set('utm_campaign', 'festival2026');

  if (typeof window !== 'undefined') {
    const searchParams = new URLSearchParams(window.location.search);
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
    utmKeys.forEach((key) => {
      const value = searchParams.get(key);
      if (value) url.searchParams.set(key, value);
    });
  }

  if (extraParams) {
    Object.entries(extraParams).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }

  return url.toString();
}
