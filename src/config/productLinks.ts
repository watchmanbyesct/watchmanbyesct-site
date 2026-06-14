import { SUITE_PRODUCTS } from './suiteProducts'

export type ProductLinkConfig = {
  label: string
  description: string
  loginUrl: string
  supportText: string
}

export const productLinks: ProductLinkConfig[] = SUITE_PRODUCTS.map((product) => ({
  label: product.name,
  description: product.description,
  loginUrl: product.loginUrl,
  supportText: `Use your ${product.name.replace('Watchman ', '')} credentials.`,
}))
