'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { Button } from '@/components/Button'

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('[blog] Render error:', error)
  }, [error])

  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-10">
      <span className="eyebrow">Blog</span>
      <h1 className="t-display mt-4">This page hit a snag.</h1>
      <p className="t-body mt-6 max-w-2xl text-[19px]">
        Something went wrong loading this article. This is usually temporary.
        Try again, or head back to the blog index.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button onClick={() => reset()}>Try again</Button>
        <Link href="/blog" className="btn btn-secondary">
          Back to the blog
        </Link>
      </div>
    </section>
  )
}
