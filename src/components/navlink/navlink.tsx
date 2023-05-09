import { useRouter } from "next/router";
import { StyledLink } from "./navlink.styles";

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  const router = useRouter();
  return (
    <StyledLink
      href={href}
      onClick={onClick}
      className={router.pathname == href ? "active" : ""}
    >
      {children}
    </StyledLink>
  );
};

export default NavLink;
