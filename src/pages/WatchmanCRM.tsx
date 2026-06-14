import { Kanban, FileText, FileSignature, Activity, Plug, BarChart3 } from 'lucide-react'
import ProductLandingPage from '../components/marketing/ProductLandingPage'
import { getSuiteProduct } from '../config/suiteProducts'

const product = getSuiteProduct('crm')!

export default function WatchmanCRM() {
  return (
    <ProductLandingPage
      product={product}
      heroSubtitle="Revenue pipeline and client growth for security firms"
      heroBody="Watchman CRM connects leads, proposals, contracts, and operations intelligence so sales and delivery teams work from the same client record—tied to Finance billing and Operations deployment readiness."
      sectionTitle="From first lead to signed contract"
      sectionDesc="CRM is module-gated per tenant on the shared Watchman survivor backend, with integrations that publish events to Finance and visibility into Operations metrics."
      features={[
        { icon: Kanban, title: 'Pipeline & leads', desc: 'Track opportunities from first contact through won/lost stages with pipeline value and sales dashboards.' },
        { icon: FileText, title: 'Proposals', desc: 'Build and export client proposals with tenant branding and structured service definitions.' },
        { icon: FileSignature, title: 'Contracts', desc: 'Manage contract workflows linked to clients and pipeline stages, ready for Finance handoff.' },
        { icon: Activity, title: 'Operations intel', desc: 'See deployment readiness and live Operations metrics alongside CRM client context.' },
        { icon: Plug, title: 'Suite integrations', desc: 'Publish CRM integration events to Finance and connect client records across the Watchman suite.' },
        { icon: BarChart3, title: 'Reports & SLA', desc: 'Revenue reporting, profitability views, SLA compliance, and staffing readiness for leadership.' },
      ]}
      closingTitle="Bring CRM into your Watchman tenant"
      closingBody="CRM is available via early access for qualifying organizations. Request a demo to enable the module and connect your sales workflow to Operations and Finance."
      showSignIn
      primaryCtaLabel="Sign in to CRM"
    />
  )
}
