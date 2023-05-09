import { useState } from "react";
import Link from "next/link";
import {
  OuterWrapper,
  StyledNavigation,
  Wrapper,
  LogoWrapper,
  HamburgerWrapper,
} from "./navbar.styles";
import { NavigationItems } from "@/assets/NavigationItems";
import NavLink from "../navlink/navlink";

export default function Navbar() {
  return (
    <OuterWrapper>
      <Wrapper>
        <LogoWrapper>
          <Link href="/">
            Jay<span>Code</span>
          </Link>
        </LogoWrapper>
        <StyledNavigation>
          {NavigationItems.map((item) => (
            <li key={item.name}>
              <NavLink href={item.href}>{item.name}</NavLink>
            </li>
          ))}
        </StyledNavigation>
        <HamburgerWrapper aria-label="Hamburger Navigation Button"></HamburgerWrapper>
      </Wrapper>
    </OuterWrapper>
  );
}
