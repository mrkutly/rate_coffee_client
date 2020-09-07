import styled from "styled-components";
import NextLink, { LinkProps } from "next/link";
import { Link as WaskodeLink } from "waskode";

const Link = (
  props: LinkProps & { children: React.ReactNode; className?: string }
) => (
  <NextLink {...props}>
    <StyledLink className={props.className}>{props.children}</StyledLink>
  </NextLink>
);

const StyledLink = styled(WaskodeLink)`
  &.active {
    border-color: var(--neutral-100);
    font-weight: 500;
    background-color: var(--primary-200);

    &:hover {
      cursor: default;
    }
  }
`;

export default Link;
