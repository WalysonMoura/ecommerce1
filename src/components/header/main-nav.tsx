
import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import useIsMobile from "@/hooks/useIsMobile"

interface MainNavProps {
  items?: NavItem[]

}

export function MainNav({ items }: MainNavProps) {
  const isMobile = useIsMobile();
  return (
    <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'}`}>
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.fullLogo className="h-10 " />
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-lg font-semibold text-muted-foreground sm:text-sm",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
