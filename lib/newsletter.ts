export async function subscribeNewsletter(email: string): Promise<{ success: boolean; message: string }> {
  try {
    const utmSource = typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search).get('utm_source') || 'website'
      : 'website';

    // Replace with your actual API endpoint
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, utm_source: utmSource }),
    });

    if (response.ok) {
      return { success: true, message: "You're in. See you soon." };
    }
    return { success: false, message: 'Something went wrong. Try again.' };
  } catch {
    return { success: false, message: 'Something went wrong. Try again.' };
  }
}
