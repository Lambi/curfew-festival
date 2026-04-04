export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return Response.json({ error: 'Email is required' }, { status: 400 });
    }

    const API_KEY = process.env.MAILERLITE_API_KEY;
    if (!API_KEY) {
      console.error('MAILERLITE_API_KEY not set');
      return Response.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Add subscriber to MailerLite "Curfew-subscribers-all" group
    const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        email,
        groups: ['183410166423618698'], // Curfew-subscribers-all
        status: 'active',
      }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      console.error('MailerLite subscribe error:', data);
      return Response.json(
        { error: 'Subscription failed. Please try again.' },
        { status: 422 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('Subscribe error:', err);
    return Response.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
