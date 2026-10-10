import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { services, process, site } from '../data/site.js'
import { useMeta, Section, Heading, ServiceCard, CTA } from '../components/ui.jsx'

const values = [
  ['Built to scale', 'Architecture chosen for growth, from first release onward.'],
  ['Business-first', 'Every feature ties back to a goal you can name.'],
  ['AI where it helps', 'We apply AI to real workflows, not as decoration.'],
  ['Transparent delivery', 'Regular demos, clear scope, written estimates.'],
]
const featured = [
  ['Document Q&A assistant', 'A RAG chatbot that answers from your manuals, policies, or knowledge base.'],
  ['Workflow automation', 'Connect your tools and remove repetitive hand-offs with automated pipelines.'],
  ['Commerce platform', 'A custom storefront with catalogue, payments, inventory, and order management.'],
]
export default function Home() {
  useMeta('', 'Zigton is a technology partner helping businesses build intelligent, scalable digital solutions: AI, software, e-commerce, and automation.')
  return (<>
    <div className="relative overflow-hidden bg-ink">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet/30 blur-3xl" aria-hidden="true" />
      <div className="wrap relative grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2">
        <div className="rise">
          <h1 className="text-4xl font-semibold leading-tight !text-white sm:text-6xl">Build intelligent software your business can grow on.</h1>
          <p className="mt-5 max-w-xl text-lg text-slate-300">{site.name} is a technology partner for startups, SMEs, and enterprises: AI, custom software, e-commerce, and digital transformation.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">Start a Project</Link>
            <Link to="/services" className="btn-ghost-dark">Explore services</Link>
          </div>
        </div>
        <div className="rise rounded-2xl border border-white/10 bg-ink2 p-5 font-mono text-sm text-slate-300" aria-hidden="true">
          <p className="text-violet">question</p><p className="mb-4 text-white">What is our refund policy for annual plans?</p>
          <p className="text-brand">retrieve → your documents</p><p className="mb-4">3 relevant passages found</p>
          <p className="text-violet">answer</p><p className="text-white">Grounded response with source references.</p>
          <p className="mt-4 text-xs text-slate-500">Illustrative example of a RAG chatbot flow.</p>
        </div>
      </div>
    </div>
    <Section>
      <Heading title="A technology partner, not just a vendor" text="Zigton helps businesses design, build, and run digital products. We combine engineering depth with clear communication so you always know where your project stands." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map((s) => <ServiceCard key={s.slug} s={s} />)}</div>
    </Section>
    <Section className="bg-slate-50">
      <Heading title="Why work with Zigton" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map(([t, d]) => <div key={t}><Check className="text-violet" aria-hidden="true" /><h3 className="mt-2 font-semibold">{t}</h3><p className="mt-1 text-sm">{d}</p></div>)}
      </div>
    </Section>
    <Section>
      <Heading title="How we work" text="A simple, four-step process that keeps projects on track." />
      <ol className="grid gap-5 md:grid-cols-4">
        {process.map(([t, d], i) => <li key={t} className="card"><span className="font-display text-2xl font-bold text-violet">{i + 1}</span><h3 className="mt-2 font-semibold">{t}</h3><p className="mt-1 text-sm">{d}</p></li>)}
      </ol>
    </Section>
    <Section dark>
      <Heading dark title="Featured solutions" text="Examples of what we build." />
      <div className="grid gap-5 md:grid-cols-3">
        {featured.map(([t, d]) => <div key={t} className="rounded-xl border border-white/10 bg-ink2 p-6"><h3 className="font-semibold !text-white">{t}</h3><p className="mt-2 text-sm">{d}</p></div>)}
      </div>
      <Link to="/services/ai-solutions" className="mt-8 inline-flex items-center gap-2 font-semibold text-white">See AI solutions <ArrowRight size={16} /></Link>
    </Section>
    <CTA />
  </>)
}
