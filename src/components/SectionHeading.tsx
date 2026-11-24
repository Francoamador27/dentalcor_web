export default function SectionHeading({ title, subtitle, id }: { title: string; subtitle?: string; id?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-lg text-pretty text-muted">{subtitle}</p>}
    </div>
  );
}
