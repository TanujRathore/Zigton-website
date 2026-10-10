import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Minus } from 'lucide-react'

export function useMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | Zigton` : 'Zigton | AI, Software & Digital Transformation'
    const set = (sel, val) => document.querySelector(sel)?.setAttribute('content', val)
    set('meta[name="description"]', description)
    set('meta[property="og:title"]', document.title)
    set('meta[property="og:description"]', description)
  }, [title, description])
}
export const Logo = ({ className = '' }) => (
  <span className={`font-display text-xl font-bold tracking-tight ${className}`}>
    Zigton<span className="text-violet">.</span>
  </span>
)
export const Section = ({ dark, className = '', children }) => (
  <section className={`py-16 sm:py-24 ${dark ? 'bg-ink text-slate-300' : ''} ${className}`}>
    <div className="wrap">{children}</div>
  </section>
)
export const Heading = ({ title, text, dark }) => (
  <div className="mb-10 max-w-2xl">
    <h2 className={`text-3xl font-semibold sm:text-4xl ${dark ? '!text-white' : ''}`}>{title}</h2>
    {text && <p className="mt-3 text-lg">{text}</p>}
  </div>
)
export const PageHero = ({ title, text }) => (
  <div className="bg-ink py-16 sm:py-20"><div className="wrap">
    <h1 className="max-w-3xl text-4xl font-semibold !text-white sm:text-5xl">{title}</h1>
    {text && <p className="mt-4 max-w-2xl text-lg text-slate-300">{text}</p>}
  </div></div>
)
export const CTA = () => (
  <Section dark className="bg-gradient-to-br from-ink via-ink2 to-[#1b1550]">
    <div className="max-w-2xl">
      <h2 className="text-3xl font-semibold !text-white sm:text-4xl">Have a project in mind?</h2>
      <p className="mt-3 text-lg">Tell us what you want to build. We reply with next steps.</p>
      <Link to="/contact" className="btn-primary mt-6">Start a Project</Link>
    </div>
  </Section>
)
export function Accordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="divide-y divide-slate-200 rounded-xl border border-slate-200">
      {items.map(([q, a], i) => (
        <div key={q}>
          <h3>
            <button className="flex w-full items-center justify-between gap-4 p-5 text-left font-medium text-ink"
              aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? -1 : i)}>
              {q}{open === i ? <Minus size={18} /> : <Plus size={18} />}
            </button>
          </h3>
          <div id={`faq-${i}`} hidden={open !== i} className="px-5 pb-5">{a}</div>
        </div>
      ))}
    </div>
  )
}
export const ServiceCard = ({ s }) => (
  <Link to={`/services/${s.slug}`} className="card group block hover:border-violet">
    <s.icon className="text-violet" size={26} aria-hidden="true" />
    <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
    <p className="mt-2 text-sm">{s.summary}</p>
    <span className="mt-4 inline-block text-sm font-semibold text-brand">Learn more</span>
  </Link>
)
