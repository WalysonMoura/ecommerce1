'use client';

import Link from 'next/link';


import { BottomNavigation } from '../BottomNavigation';
import { MobileMenu } from './MobileMenu';
import { DesktopMenu } from './DesktopMenu';
import useIsMobile from '@/hooks/useIsMobile';
import { siteConfig } from '@/config/site';
import { MainNav } from '../main-nav';
import { InformationBar } from '../InformationBar';


export function Header() {
  const isMobile = useIsMobile();

  /*
    {isMobile ? (
        <>
          <BottomNavigation />
        </>
      ) : (
        <p></p>
      )}

  */
  return (
    <>
      <InformationBar />
      {isMobile && <BottomNavigation />}
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-center sm:space-x-0">
          <MainNav items={siteConfig.mainNav} />
          <div className="flex flex-1 items-center justify-end space-x-4">
            {isMobile ? <MobileMenu /> : <DesktopMenu />}
          </div>
        </div>
      </header>
    </>
  );
}
