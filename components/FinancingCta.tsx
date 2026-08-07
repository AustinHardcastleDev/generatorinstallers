import Link from 'next/link'
import { ButtonLink } from './Button'

export function FinancingCta({
  title = 'Plan the financing conversation before deposits land.',
  body = 'Dealer plans are common, and deferred-interest terms are easy to misread. Walk through the payment structure before you compare quotes.',
  linkLabel = 'Explore financing basics →',
}: {
  title?: string
  body?: string
  linkLabel?: string
}) {
  return (
    <aside className="band-dark rounded-card px-6 py-8 sm:px-8">
      <span className="eyebrow-bare text-[var(--color-band-muted)]">Financing</span>
      <h2 className="mt-3 text-[26px] font-extrabold leading-[1.1] tracking-[-0.035em] text-white sm:text-[30px]">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-[16px] leading-[1.65] text-[var(--color-band-body)]">
        {body}
      </p>
      <div className="mt-6">
        <ButtonLink href="/financing" variant="primary">
          {linkLabel}
        </ButtonLink>
      </div>
      <p className="mt-4 text-[13px] text-[var(--color-band-muted)]">
        Or open the{' '}
        <Link href="/financing" className="link">
          financing hub
        </Link>{' '}
        for term patterns and questions to ask the dealer.
      </p>
    </aside>
  )
}
