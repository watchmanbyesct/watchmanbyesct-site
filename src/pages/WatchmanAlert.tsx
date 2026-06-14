import { Siren, Radio, Map, Bell, Workflow, ShieldAlert } from 'lucide-react'
import ProductLandingPage from '../components/marketing/ProductLandingPage'
import { getSuiteProduct } from '../config/suiteProducts'

const product = getSuiteProduct('alert')!

export default function WatchmanAlert() {
  return (
    <ProductLandingPage
      product={product}
      heroSubtitle="Emergency command center and mass notification"
      heroBody="Watchman Alert extends the suite with panic and duress routing, emergency command center views, workflow playbooks, and cross-product event publishing—integrated with Operations incidents and dispatch when enabled."
      sectionTitle="Rapid escalation beyond day-to-day operations"
      sectionDesc="Alert is module-gated per tenant and can run standalone or publish events to Operations and other Watchman consumers via the integration event bus."
      features={[
        { icon: Siren, title: 'Emergency command center', desc: 'Live alert feed with map context, acknowledgment, and resolution workflows for supervisors.' },
        { icon: Bell, title: 'Panic & duress alerts', desc: 'Route officer safety signals with severity classification and escalation rules.' },
        { icon: Map, title: 'Location-aware response', desc: 'See alerts on the command map with site context and linked Operations artifacts.' },
        { icon: Workflow, title: 'Workflow playbooks', desc: 'Launch built-in or custom playbooks with run logs for repeatable emergency response.' },
        { icon: Radio, title: 'Radio & PTT broadcast', desc: 'Notify talkgroups and radio channels when emergency protocols require voice coordination.' },
        { icon: ShieldAlert, title: 'Operations linkage', desc: 'Create Operations incidents or dispatch events directly from alert detail when modules are enabled.' },
      ]}
      closingTitle="Add Alert to your Watchman tenant"
      closingBody="Alert is available via early access for organizations that need emergency command beyond standard field operations. Request a demo to enable the module and configure escalation paths."
      showSignIn
      primaryCtaLabel="Sign in to Alert"
    />
  )
}
