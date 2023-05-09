import { useRouter } from "next/router";
import { StyledLink } from "./navlink.styles";

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const router = useRouter();
  return (
    <StyledLink href={href} className={router.pathname == href ? "active" : ""}>
      {children}
    </StyledLink>
  );
};

export default NavLink;
