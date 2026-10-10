import { site } from '../data/site.js'
import { useMeta, PageHero, Section } from '../components/ui.jsx'

const Doc = ({ title, intro, rows }) => (<>
  <PageHero title={title} />
  <Section><div className="max-w-3xl space-y-8">
    <p>{intro}</p>
    {rows.map(([h, t]) => <div key={h}><h2 className="text-xl font-semibold">{h}</h2><p className="mt-2">{t}</p></div>)}
    <div><h2 className="text-xl font-semibold">Contact</h2><p className="mt-2">Questions: <a className="text-brand underline" href={`mailto:${site.email}`}>{site.email}</a></p></div>
  </div></Section>
</>)
export const Privacy = () => {
  useMeta('Privacy Policy', 'How Zigton collects, uses, and protects your personal information.')
  return <Doc title="Privacy Policy" intro="This policy explains how Zigton handles personal information collected through this website."
    rows={[
      ['Data we collect', 'Information you submit through the contact form (name, business email, company, service interest, optional budget, and project description).'],
      ['How we use it', 'To respond to enquiries and prepare proposals. We do not sell personal data.'],
      ['Cookies', 'This site does not set tracking cookies by default. If analytics are added, this section will be updated.'],
      ['Third-party services', 'If a form service is configured, submissions are processed by that provider. Fonts are loaded from Google Fonts.'],
      ['Retention', 'We keep enquiry data only as long as needed to handle your request and meet legal obligations.'],
      ['Security', 'We use reasonable technical and organisational measures. No method of transmission is fully secure.'],
      ['Your rights', 'Depending on your location, you may request access, correction, or deletion of your data by contacting us.'],
    ]} />
}
export const Terms = () => {
  useMeta('Terms & Conditions', 'Terms governing use of the Zigton website.')
  return <Doc title="Terms & Conditions" intro="By using this website you agree to these terms."
    rows={[
      ['Website use', 'Use the site lawfully and do not attempt to disrupt or gain unauthorised access to it.'],
      ['Intellectual property', 'Site content, branding, and code are owned by Zigton or its licensors and may not be copied without permission.'],
      ['Disclaimer', 'Content is provided for general information, "as is", without warranties of any kind.'],
      ['Limitation of liability', 'To the extent permitted by law, Zigton is not liable for losses arising from use of this website.'],
      ['Project terms', 'Services are governed by a separate written agreement.'],
      ['Applicable law', 'These terms are governed by the laws of the jurisdiction set out in your company details. Update this section before launch.'],
    ]} />
}
