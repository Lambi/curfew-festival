const REDIRECT_ENABLED = process.env.NEXT_PUBLIC_REDIRECT_ENABLED === 'true';
const PREVIEW_PARAM = 'preview';
const PREVIEW_VALUE = 'curfew2026';
const COOKIE_NAME = 'curfew_preview';

export function shouldRedirect(): boolean {
  if (typeof window === 'undefined') return false;
  if (!REDIRECT_ENABLED) return false;

  const searchParams = new URLSearchParams(window.location.search);
  if (searchParams.get(PREVIEW_PARAM) === PREVIEW_VALUE) {
    document.cookie = `${COOKIE_NAME}=true; path=/; max-age=${60 * 60 * 24 * 30}`;
    return false;
  }

  if (document.cookie.includes(`${COOKIE_NAME}=true`)) {
    return false;
  }

  return true;
}

export { REDIRECT_ENABLED };
