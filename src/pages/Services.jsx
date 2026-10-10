import { Link, useParams } from 'react-router-dom'
import { Check } from 'lucide-react'
import { services } from '../data/site.js'
import { useMeta, PageHero, Section, Heading, ServiceCard, CTA } from '../components/ui.jsx'
import NotFound from './NotFound.jsx'

export function Services() {
  useMeta('Services', 'AI solutions, software development, e-commerce, cloud and automation, and UI/UX design from Zigton.')
  return (<>
    <PageHero title="Services" text="End-to-end digital capabilities for startups, SMEs, and enterprises." />
    <Section>
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((s) => (
          <div key={s.slug} className="card">
            <ServiceCard s={s} />
            <ul className="mt-4 space-y-1 text-sm">{s.benefits.map((b) => <li key={b} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-violet" />{b}</li>)}</ul>
          </div>
        ))}
      </div>
    </Section>
    <CTA />
  </>)
}
export function ServicePage() {
  const { slug } = useParams()
  const s = services.find((x) => x.slug === slug)
  useMeta(s?.title, s?.summary)
  if (!s) return <NotFound />
  return (<>
    <PageHero title={s.title} text={s.summary} />
    <Section>
      <div className="grid gap-12 lg:grid-cols-2">
        <div><Heading title="What we deliver" />
          <ul className="space-y-3">{s.items.map((i) => <li key={i} className="flex gap-3"><Check className="mt-0.5 shrink-0 text-violet" size={18} />{i}</li>)}</ul></div>
        <div><Heading title="Benefits" />
          <ul className="space-y-3">{s.benefits.map((b) => <li key={b} className="card">{b}</li>)}</ul>
          <Link to="/services" className="mt-6 inline-block text-sm font-semibold text-brand">All services</Link></div>
      </div>
    </Section>
    <CTA />
  </>)
}
