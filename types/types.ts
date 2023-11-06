export type CategoryType = {
  id: string
  slug: string
  title: string
  desc?: string
}[];

export type ProductType = {
  id: string
  slug: string
  title: string
  desc?: string
  image?: string
  price: number
  options?: { title: string; additionalPrice: number }[]
}[];