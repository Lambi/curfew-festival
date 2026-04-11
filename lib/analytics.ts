declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const FB_PIXEL_ID = '636940698616732';
const GA_MEASUREMENT_ID = 'G-NX0DWXZZBY';

export function initMetaPixel() {
  if (typeof window === 'undefined') return;

  const script = document.createElement('script');
  script.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('consent', 'revoke');
    fbq('init', '${FB_PIXEL_ID}');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(script);
}

export function initGA4() {
  if (typeof window === 'undefined') return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  const configScript = document.createElement('script');
  configScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'default', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied',
      'ad_personalization': 'denied',
      'ad_user_data': 'denied',
      'region': ['BE', 'NL', 'FR', 'DE']
    });
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `;
  document.head.appendChild(configScript);
}

export function grantConsent() {
  if (typeof window === 'undefined') return;
  window.fbq?.('consent', 'grant');
  window.gtag?.('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'granted',
  });
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  window.fbq?.('track', eventName, params);
  window.gtag?.('event', eventName, params);
}

export function trackTicketClick() {
  trackEvent('InitiateCheckout');
  if (typeof window !== 'undefined') {
    window.gtag?.('event', 'begin_checkout');
  }
}

export function trackNewsletterSignup() {
  trackEvent('Lead');
  if (typeof window !== 'undefined') {
    window.gtag?.('event', 'generate_lead');
  }
}

export function trackContentView(section: string) {
  trackEvent('ViewContent', { content_name: section });
}
