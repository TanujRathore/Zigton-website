import { Link } from 'react-router-dom'
import { useMeta } from '../components/ui.jsx'
export default function NotFound() {
  useMeta('Page not found', 'The page you are looking for does not exist.')
  return (
    <div className="bg-ink py-28 text-center"><div className="wrap">
      <p className="font-display text-7xl font-bold text-violet">404</p>
      <h1 className="mt-4 text-3xl font-semibold !text-white">We could not find that page</h1>
      <p className="mt-2 text-slate-300">It may have moved, or the link may be wrong.</p>
      <Link to="/" className="btn-primary mt-6">Back to home</Link>
    </div></div>
  )
}
