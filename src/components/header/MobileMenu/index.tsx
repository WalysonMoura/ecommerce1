"use client"
import { siteConfig } from "@/config/site";
import { MainNav } from "../main-nav";
import useIsMobile from "@/hooks/useIsMobile";

export function MobileMenu() {
    const isMobile = useIsMobile();
    return (
        <>
            <h1>k</h1>
            <MainNav items={siteConfig.mainNav} isMobile={isMobile} />
        </>

    )
}