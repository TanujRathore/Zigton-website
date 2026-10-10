import { Sparkles, Code2, ShoppingCart, Cloud, Palette } from 'lucide-react'
const env = import.meta.env
export const site = {
  name: 'Zigton',
  tagline: 'Intelligent, scalable digital solutions for growing businesses.',
  email: env.VITE_CONTACT_EMAIL || 'hello@your-domain.com',
  url: env.VITE_SITE_URL || 'https://www.your-domain.com',
  formEndpoint: env.VITE_FORM_ENDPOINT || '',
  socials: [
    { label: 'LinkedIn', href: env.VITE_LINKEDIN_URL },
    { label: 'GitHub', href: env.VITE_GITHUB_URL },
    { label: 'X', href: env.VITE_X_URL },
  ].filter((s) => s.href),
}
export const services = [
  { slug: 'ai-solutions', title: 'AI Solutions', icon: Sparkles,
    summary: 'Generative AI and LLM-powered tools that fit the way your team already works.',
    items: ['Generative AI applications', 'LLM integration into existing products', 'RAG chatbots grounded in your documents', 'AI assistants for support and internal teams', 'Intelligent search across your content', 'AI-driven workflow automation'],
    benefits: ['Answers grounded in your own data', 'Less time on routine work', 'Provider-flexible architecture'] },
  { slug: 'software-development', title: 'Software Development', icon: Code2,
    summary: 'Custom software built to be maintained, extended, and trusted.',
    items: ['Custom web applications', 'Frontend and backend development', 'API design and integration', 'Enterprise software', 'Database solutions', 'Legacy modernisation'],
    benefits: ['Clean, documented codebases', 'Architecture that scales with you', 'Incremental modernisation, not big-bang rewrites'] },
  { slug: 'ecommerce', title: 'E-commerce', icon: ShoppingCart,
    summary: 'Online stores and commerce back-ends that are quick to browse and simple to run.',
    items: ['Online store development', 'Storefront development', 'Product catalogues', 'Payment integrations', 'Inventory management', 'Order management and third-party integrations'],
    benefits: ['Smooth checkout experience', 'One view of stock and orders', 'Connected to your existing tools'] },
  { slug: 'cloud-automation', title: 'Cloud & Automation', icon: Cloud,
    summary: 'Reliable cloud infrastructure and automation that removes manual work.',
    items: ['Cloud deployment', 'Business automation', 'ETL and data workflows', 'System integrations', 'CI/CD pipelines'],
    benefits: ['Repeatable, safer releases', 'Less manual data handling', 'Systems that talk to each other'] },
  { slug: 'ui-ux', title: 'UI/UX Design', icon: Palette,
    summary: 'Interfaces that make complex products easy to understand and use.',
    items: ['Responsive interfaces', 'Dashboards', 'Design systems', 'Accessibility', 'Application redesign'],
    benefits: ['Consistent, reusable UI', 'Usable by more people', 'Fewer support questions'] },
]
export const process = [
  ['Discover', 'We learn your goals, users, and constraints, then agree scope.'],
  ['Design', 'We shape flows, interfaces, and architecture before heavy build work.'],
  ['Build', 'We deliver in short iterations you can review and steer.'],
  ['Launch and support', 'We deploy, document, and stay available as you grow.'],
]
export const values = [
  ['Clarity', 'Plain language, honest estimates, no surprises.'],
  ['Craft', 'Maintainable code and considered design.'],
  ['Partnership', 'We work as an extension of your team.'],
  ['Responsibility', 'Security and privacy are part of the build.'],
]
export const faqs = [
  ['What services does Zigton offer?', 'AI solutions, custom software, e-commerce, cloud and automation, and UI/UX design for startups, SMEs, and enterprises.'],
  ['How is pricing determined?', 'It depends on scope, complexity, and timeline. After a discovery conversation we share a written proposal. The optional budget field on the contact form helps us scope.'],
  ['How long does a project take?', 'Small projects can take a few weeks; larger platforms take several months. We estimate after discovery.'],
  ['How do we start?', 'Send a brief through the contact page. We reply to arrange a discovery call.'],
  ['Can you work with our existing systems?', 'Yes. We integrate with existing APIs, databases, and tools, and can modernise legacy systems step by step.'],
  ['Do you offer support after launch?', 'Yes. Maintenance and support can be agreed as part of the engagement.'],
]
