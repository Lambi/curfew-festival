export async function POST(request: Request) {
  try {
    const { email, name, message } = await request.json();

    if (!email || typeof email !== 'string') {
      return Response.json({ error: 'Email is required' }, { status: 400 });
    }

    const API_KEY = process.env.MAILERLITE_API_KEY;
    if (!API_KEY) {
      console.error('MAILERLITE_API_KEY not set');
      return Response.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Add to MailerLite "Curfew-contact-requests" group with name + message
    const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        email,
        fields: {
          name: name || '',
          contact_message: message || '',
        },
        groups: ['183775914616685707'], // Curfew-contact-requests
        status: 'active',
      }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      console.error('MailerLite contact error:', data);
      return Response.json(
        { error: 'Submission failed. Please try again.' },
        { status: 422 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('Contact error:', err);
    return Response.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
