import { getCurrentMonth } from "@/utils/getCurrentMonth"

export type SiteConfig = typeof siteConfig

const currentMonth = getCurrentMonth()

const categories = [
  {
    title: "Eletrônicos",
    href: "/",
    image: "",
  },
]

export const siteConfig = {
  name: "Wizen Shop",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "blog",
      href: "/",
    },
    {
      title: `Promoções de ${currentMonth}`,
      href: "/promo-do-mes",
    },
  ],
  productCategories: categories,
  bottomNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Produtos",
      href: "/carrinho",
    },
    {
      title: "Cart",
      href: "/carrinho",
    },
    {
      title: "Perfil",
      href: "/perfil",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
  banners: [
    {
      name: "wizen-prime.png",
      href: "#",
    },
    {
      name: "wizen-prime.png",
      href: "#",
    },
  ],
}
