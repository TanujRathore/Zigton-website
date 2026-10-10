import { values } from '../data/site.js'
import { useMeta, PageHero, Section, Heading, CTA } from '../components/ui.jsx'
export default function About() {
  useMeta('About', 'Zigton is a technology partner helping businesses build intelligent, scalable digital solutions.')
  return (<>
    <PageHero title="About Zigton" text="A technology partner helping businesses build intelligent, scalable digital solutions." />
    <Section>
      <div className="grid gap-10 md:grid-cols-2">
        <div><h2 className="text-2xl font-semibold">Mission</h2><p className="mt-3">To help organisations turn ideas into reliable software, using modern engineering and practical AI.</p></div>
        <div><h2 className="text-2xl font-semibold">Vision</h2><p className="mt-3">A world where every business, of any size, can use intelligent technology with confidence.</p></div>
      </div>
    </Section>
    <Section className="bg-slate-50">
      <Heading title="Our values" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{values.map(([t, d]) => <div key={t} className="card"><h3 className="font-semibold">{t}</h3><p className="mt-2 text-sm">{d}</p></div>)}</div>
    </Section>
    <Section>
      <Heading title="Our approach" text="We start with your business goals, then choose the simplest technology that meets them. We build in small steps, share progress often, and design systems so you can extend them later, including with backend services, authentication, and AI APIs." />
    </Section>
    <CTA />
  </>)
}
