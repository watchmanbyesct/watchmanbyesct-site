import { Users, Monitor, Inbox, ClipboardList, ShieldCheck, Tags } from 'lucide-react'
import ProductLandingPage from '../components/marketing/ProductLandingPage'
import { getSuiteProduct } from '../config/suiteProducts'

const product = getSuiteProduct('contact')!

export default function WatchmanContact() {
  return (
    <ProductLandingPage
      product={product}
      heroSubtitle="Visitor intake and contact management for secured sites"
      heroBody="Watchman Contact gives staff a governed workspace for contacts, follow-ups, and custom intake forms—with kiosk mode for front-desk tablets and an approval inbox before submissions become records."
      sectionTitle="Front desk to follow-up in one workspace"
      sectionDesc="Contact runs on the shared survivor Supabase project with role-based permissions and tenant module entitlements—alongside HR, Finance, and Operations."
      features={[
        { icon: Users, title: 'Contact directory', desc: 'Search, filter, tag, and manage contacts with duplicate warnings and merge workflows.' },
        { icon: Monitor, title: 'Kiosk mode', desc: 'Public tablet intake at /kiosk/[slug] with fullscreen layout for site front desks.' },
        { icon: Inbox, title: 'Pending inbox', desc: 'Approve or reject kiosk submissions before they become official contact records.' },
        { icon: ClipboardList, title: 'Custom intake forms', desc: 'Build staff and kiosk forms with configurable fields and referral tracking.' },
        { icon: Tags, title: 'Activity timeline', desc: 'Notes, follow-ups, assignments, and tenant-wide activity logging.' },
        { icon: ShieldCheck, title: 'Role-based access', desc: 'Owner, tenant admin, manager, staff, and read-only roles gate sensitive actions and exports.' },
      ]}
      closingTitle="Enable Contact for your sites"
      closingBody="Contact is available via early access. Request a demo to enable the module, configure kiosk slugs, and connect intake to your broader Watchman operations."
      showSignIn
      primaryCtaLabel="Sign in to Contact"
    />
  )
}
