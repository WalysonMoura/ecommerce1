'use client';

import Link from 'next/link';
import * as Style from "./styles"

import { BottomNavigation } from '../BottomNavigation';
import { MobileMenu } from './MobileMenu';
import { DesktopMenu } from './DesktopMenu';
import useIsMobile from '@/hooks/useIsMobile';
import { siteConfig } from '@/config/site';

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
      {isMobile && <BottomNavigation />}
      <Style.HeaderContainer>
        <InformationBar />
        <Style.Container>
          <div className="flex flex-1 items-center justify-end space-x-4">
            {isMobile ? <MobileMenu /> : <DesktopMenu />}
          </div>
        </Style.Container>
      </Style.HeaderContainer>
    </>
  );
}
