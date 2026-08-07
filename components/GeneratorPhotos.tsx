import Image from 'next/image'

export function HeroGeneratorPhoto() {
  return (
    <figure className="overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-panel)]">
      <Image
        src="/images/generators/standby-closeup-hero.jpg"
        alt="Residential standby generator on a concrete pad beside a brick house"
        width={1600}
        height={1066}
        priority
        sizes="(max-width: 768px) 100vw, 45vw"
        className="aspect-[4/3] h-full w-full object-cover"
      />
    </figure>
  )
}
