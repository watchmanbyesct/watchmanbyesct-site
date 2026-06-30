import React from 'react'
import { STANDALONE_PRODUCTS, COMMUNITY_PRODUCTS } from '../../config/ecosystemProducts'
import ProductCard from './ProductCard'
import { maxW, SectionLabel } from './shared'

export default function StandaloneProducts() {
  const allProducts = [...STANDALONE_PRODUCTS, ...COMMUNITY_PRODUCTS]

  return (
    <section id="products" style={{ padding: 'clamp(72px,8vw,100px) 24px', background: '#060606' }}>
      <div style={maxW}>
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Standalone Products</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: 14 }}>
            Deploy independently, connect when ready
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, maxWidth: 680, lineHeight: 1.7 }}>
            These Watchman products deploy as standalone platforms. Many integrate optionally with Watchman Suite — purchase only what you need.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 18 }}>
          {allProducts.map(m => (
            <ProductCard
              key={m.id}
              product={m}
              variant={m.category === 'community' ? 'community' : 'standalone'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
