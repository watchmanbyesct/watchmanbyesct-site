import React from 'react'
import Nav from '../components/landing/Nav'
import Hero from '../components/landing/Hero'
import EcosystemMap from '../components/landing/EcosystemMap'
import Platform from '../components/landing/Platform'
import SuiteModules from '../components/landing/SuiteModules'
import StandaloneProducts from '../components/landing/StandaloneProducts'
import NativeApps from '../components/landing/NativeApps'
import IntegrationStory from '../components/landing/IntegrationStory'
import WhoWeServe from '../components/landing/WhoWeServe'
import Pricing from '../components/landing/Pricing'
import About from '../components/landing/About'
import DemoForm from '../components/landing/DemoForm'
import Footer from '../components/landing/Footer'
import { Divider, LandingStyles } from '../components/landing/shared'

export default function Home() {
  return (
    <div style={{ background: '#060606', minHeight: '100vh' }}>
      <LandingStyles />
      <Nav />
      <Hero />
      <Divider />
      <EcosystemMap />
      <Divider />
      <Platform />
      <Divider />
      <SuiteModules />
      <Divider />
      <StandaloneProducts />
      <Divider />
      <NativeApps />
      <Divider />
      <IntegrationStory />
      <Divider />
      <WhoWeServe />
      <Divider />
      <Pricing />
      <Divider />
      <About />
      <Divider />
      <DemoForm />
      <Footer />
    </div>
  )
}
