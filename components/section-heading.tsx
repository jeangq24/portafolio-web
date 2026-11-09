interface SectionHeadingProps {
  id: string
  number: string
  eyebrow: string
  title: string
}

export default function SectionHeading({ id, number, eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        <p className="section-kicker">{eyebrow}</p>
        <h2 id={id} className="section-title">{title}</h2>
      </div>
      <span aria-hidden="true" className="display-type pb-1 text-3xl text-muted-foreground">/{number}</span>
    </div>
  )
}