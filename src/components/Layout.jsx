import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { site, services } from '../data/site.js'
import { Logo } from './ui.jsx'

const nav = [['/about', 'About'], ['/faq', 'FAQ'], ['/contact', 'Contact']]
const link = ({ isActive }) => `text-sm font-medium hover:text-white ${isActive ? 'text-white' : 'text-slate-300'}`

function Header() {
  const [mobile, setMobile] = useState(false)
  const [dd, setDd] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setMobile(false); setDd(false); window.scrollTo(0, 0) }, [pathname])
  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && setDd(false)
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [])
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:bg-white focus:p-2">Skip to content</a>
      <div className="wrap flex h-16 items-center justify-between">
        <Link to="/" aria-label="Zigton home"><Logo className="text-white" /></Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          <div className="relative" onMouseLeave={() => setDd(false)}>
            <button className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white" aria-expanded={dd} aria-haspopup="true"
              onClick={() => setDd(!dd)} onMouseEnter={() => setDd(true)}>
              Services <ChevronDown size={14} />
            </button>
            {dd && (
              <div className="absolute left-0 top-full w-64 rounded-xl border border-white/10 bg-ink2 p-2 shadow-xl">
                <Link to="/services" className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/10">All services</Link>
                {services.map((s) => <Link key={s.slug} to={`/services/${s.slug}`} className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/10">{s.title}</Link>)}
              </div>
            )}
          </div>
          {nav.map(([to, t]) => <NavLink key={to} to={to} className={link}>{t}</NavLink>)}
          <Link to="/contact" className="btn-primary">Start a Project</Link>
        </nav>
        <button className="text-white md:hidden" aria-label={mobile ? 'Close menu' : 'Open menu'} aria-expanded={mobile} onClick={() => setMobile(!mobile)}>
          {mobile ? <X /> : <Menu />}
        </button>
      </div>
      {mobile && (
        <nav className="wrap flex flex-col gap-3 pb-5 md:hidden" aria-label="Mobile">
          <NavLink to="/services" className={link}>Services</NavLink>
          {services.map((s) => <NavLink key={s.slug} to={`/services/${s.slug}`} className="pl-4 text-sm text-slate-400 hover:text-white">{s.title}</NavLink>)}
          {nav.map(([to, t]) => <NavLink key={to} to={to} className={link}>{t}</NavLink>)}
          <Link to="/contact" className="btn-primary">Start a Project</Link>
        </nav>
      )}
    </header>
  )
}

function Footer() {
  const h = 'mb-3 text-sm font-semibold text-white'
  const a = 'block py-1 text-sm hover:text-white'
  return (
    <footer className="bg-ink text-slate-400">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="text-white" />
          <p className="mt-3 text-sm">{site.tagline}</p>
          <a className="mt-3 block text-sm hover:text-white" href={`mailto:${site.email}`}>{site.email}</a>
          <div className="mt-3 flex gap-4">{site.socials.map((s) => <a key={s.label} href={s.href} rel="noopener noreferrer" target="_blank" className="text-sm hover:text-white">{s.label}</a>)}</div>
        </div>
        <div><p className={h}>Services</p>{services.map((s) => <Link key={s.slug} className={a} to={`/services/${s.slug}`}>{s.title}</Link>)}</div>
        <div><p className={h}>Company</p><Link className={a} to="/about">About</Link><Link className={a} to="/faq">FAQ</Link><Link className={a} to="/contact">Contact</Link></div>
        <div><p className={h}>Legal</p><Link className={a} to="/privacy-policy">Privacy Policy</Link><Link className={a} to="/terms">Terms & Conditions</Link></div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs">© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
    </footer>
  )
}

export default function Layout() {
  return (<><Header /><main id="main"><Outlet /></main><Footer /></>)
}
