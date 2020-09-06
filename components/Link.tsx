import NextLink, { LinkProps } from "next/link";
import { Link as StyledLink } from "waskode";

const Link = (props: LinkProps & { children: React.ReactNode }) => (
  <NextLink {...props}>
    <StyledLink>{props.children}</StyledLink>
  </NextLink>
);

export default Link;
