const FROM_ADDRESS = { email: 'contact@markjamesweb.dev', name: 'markjamesweb.dev' }

const MAX_LENGTHS = { name: 200, email: 320, message: 5000 }

type ContactPayload = {
  name: string
  email: string
  message: string
  company?: string
}

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url)

    if (url.pathname === '/api/contact' && request.method === 'POST') {
      return handleContact(request, env)
    }

    return new Response('Not found', { status: 404 })
  },
} satisfies ExportedHandler<Env>

async function handleContact(request: Request, env: Env): Promise<Response> {
  let payload: ContactPayload
  try {
    payload = await request.json()
  } catch {
    return json({ error: 'Invalid request body.' }, 400)
  }

  // honeypot — real users never populate this hidden field
  if (payload.company) {
    return json({ ok: true })
  }

  const name = String(payload.name ?? '').trim().slice(0, MAX_LENGTHS.name)
  const email = String(payload.email ?? '').trim().slice(0, MAX_LENGTHS.email)
  const message = String(payload.message ?? '').trim().slice(0, MAX_LENGTHS.message)

  if (!name || !message || !isValidEmail(email)) {
    return json({ error: 'Please fill in all fields with a valid email address.' }, 400)
  }

  try {
    await env.EMAIL.send({
      to: env.CONTACT_EMAIL,
      from: FROM_ADDRESS,
      replyTo: email,
      subject: `New message from ${name} via markjamesweb.dev`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p><p>${escapeHtml(
        message,
      ).replace(/\n/g, '<br>')}</p>`,
    })
  } catch (error) {
    console.error('EMAIL.send failed', error)
    return json({ error: 'Could not send right now — please try again shortly.' }, 502)
  }

  return json({ ok: true })
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function escapeHtml(value: string): string {
  const escapes: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }
  return value.replace(/[&<>"']/g, (char) => escapes[char]!)
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  })
}
