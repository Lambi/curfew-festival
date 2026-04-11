const FESTIVAL_SHOP_URL = 'https://www.tiqs.com/alfred/events/shop/4789';
const LANDING_PAGE_URL = 'https://www.tiqs.com/alfred/upcoming_events/217350';

function appendUtm(base: string, extraParams?: Record<string, string>): string {
  const url = new URL(base);

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

/** Direct link to the festival ticket shop */
export function buildTicketUrl(extraParams?: Record<string, string>): string {
  return appendUtm(FESTIVAL_SHOP_URL, extraParams);
}

/** Landing page with all upcoming events */
export function buildLandingUrl(extraParams?: Record<string, string>): string {
  return appendUtm(LANDING_PAGE_URL, extraParams);
}

/** Mo'Juice × Curfew at Wintercircus ticket link */
export const MOJUICE_TICKET_URL =
  'https://apps.ticketmatic.com/widgets/vooruit/flow/democrazy?event=822312681893&l=nl%23%21%2Faddtickets&utm_source=curfew_website&utm_medium=cta&utm_campaign=mojuice2026#!/addtickets';
