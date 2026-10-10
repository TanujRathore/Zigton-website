import { useState } from 'react'
import { site, services } from '../data/site.js'
import { useMeta, PageHero, Section } from '../components/ui.jsx'

const empty = { name: '', email: '', company: '', service: '', budget: '', message: '', consent: false }
const validate = (v) => {
  const e = {}
  if (!v.name.trim()) e.name = 'Enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid business email.'
  if (!v.company.trim()) e.company = 'Enter your company name.'
  if (!v.service) e.service = 'Select a service.'
  if (v.message.trim().length < 20) e.message = 'Describe your project in at least 20 characters.'
  if (!v.consent) e.consent = 'Please accept the privacy policy.'
  return e
}
export default function Contact() {
  useMeta('Contact', 'Start a project with Zigton. Tell us what you want to build.')
  const [v, setV] = useState(empty)
  const [err, setErr] = useState({})
  const [status, setStatus] = useState(null)
  const set = (k) => (e) => setV({ ...v, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })

  async function submit(ev) {
    ev.preventDefault()
    const e = validate(v); setErr(e)
    if (Object.keys(e).length) { setStatus(null); return }
    if (site.formEndpoint) {
      setStatus({ type: 'info', text: 'Sending...' })
      try {
        const r = await fetch(site.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(v) })
        if (!r.ok) throw new Error()
        setStatus({ type: 'ok', text: 'Thanks. Your message was sent and we will reply by email.' }); setV(empty)
      } catch { setStatus({ type: 'error', text: `We could not send your message. Please email ${site.email} directly.` }) }
    } else {
      const body = `Name: ${v.name}\nEmail: ${v.email}\nCompany: ${v.company}\nService: ${v.service}\nBudget: ${v.budget || 'n/a'}\n\n${v.message}`
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Project enquiry from ' + v.name)}&body=${encodeURIComponent(body)}`
      setStatus({ type: 'info', text: 'Your email app should open with a drafted message. Nothing has been sent until you press send there.' })
    }
  }
  const F = ({ id, label, children, req }) => (
    <div><label htmlFor={id} className="text-sm font-medium text-ink">{label}{req && ' *'}</label>{children}
      {err[id] && <p id={`${id}-e`} className="mt-1 text-sm text-red-600">{err[id]}</p>}</div>)
  const a = (id) => ({ id, 'aria-invalid': !!err[id], 'aria-describedby': err[id] ? `${id}-e` : undefined })
  return (<>
    <PageHero title="Start a project" text="Tell us about your goals and we will reply with next steps." />
    <Section><form onSubmit={submit} noValidate className="max-w-2xl space-y-5">
      <F id="name" label="Name" req><input {...a('name')} className="input" autoComplete="name" value={v.name} onChange={set('name')} /></F>
      <F id="email" label="Business email" req><input {...a('email')} type="email" className="input" autoComplete="email" value={v.email} onChange={set('email')} /></F>
      <F id="company" label="Company" req><input {...a('company')} className="input" autoComplete="organization" value={v.company} onChange={set('company')} /></F>
      <F id="service" label="Service" req><select {...a('service')} className="input" value={v.service} onChange={set('service')}>
        <option value="">Select a service</option>{services.map((s) => <option key={s.slug}>{s.title}</option>)}<option>Not sure yet</option></select></F>
      <F id="budget" label="Budget (optional)"><input {...a('budget')} className="input" placeholder="e.g. a range or currency amount" value={v.budget} onChange={set('budget')} /></F>
      <F id="message" label="Project description" req><textarea {...a('message')} rows={5} className="input" value={v.message} onChange={set('message')} /></F>
      <F id="consent" label=""><label className="flex gap-2 text-sm"><input {...a('consent')} type="checkbox" checked={v.consent} onChange={set('consent')} className="mt-1" />
        I agree to the processing of my details as described in the <a className="text-brand underline" href="/privacy-policy">Privacy Policy</a>. *</label></F>
      <button className="btn-primary" type="submit">Send enquiry</button>
      <p role="status" aria-live="polite" className={status ? `text-sm ${status.type === 'error' ? 'text-red-600' : status.type === 'ok' ? 'text-green-700' : 'text-slate-600'}` : ''}>{status?.text}</p>
    </form></Section>
  </>)
}
