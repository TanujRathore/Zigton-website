import { faqs } from '../data/site.js'
import { useMeta, PageHero, Section, Accordion, CTA } from '../components/ui.jsx'
export default function FAQ() {
  useMeta('FAQ', 'Answers about Zigton services, pricing, timelines, and how we work together.')
  return (<><PageHero title="Frequently asked questions" /><Section><div className="max-w-3xl"><Accordion items={faqs} /></div></Section><CTA /></>)
}
