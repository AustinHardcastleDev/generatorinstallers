import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid payload.' }, { status: 400 })
  }

  const data = body as Record<string, unknown>
  if (typeof data.website === 'string' && data.website.trim()) {
    return NextResponse.json({ ok: true })
  }

  const name = String(data.name || '').trim()
  const email = String(data.email || '').trim()
  const message = String(data.message || '').trim()
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email, and message are required.' },
      { status: 400 },
    )
  }

  // Inbox wiring comes later. Accept and acknowledge so forms work in preview.
  console.info('[contact]', {
    topic: data.topic,
    name,
    email,
    company: data.company,
    listingUrl: data.listingUrl,
    message: message.slice(0, 500),
  })

  return NextResponse.json({ ok: true })
}
