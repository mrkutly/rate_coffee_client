import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "./Link";
import { TertiaryButton } from "waskode";

const links = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/about",
    name: "about",
  },
];

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <style global jsx>{`
        body {
          overflow: hidden;
        }
      `}</style>
      <HeaderStyles>
        <Link href="/">
          <h1>rate_coffee</h1>
        </Link>
        <nav>
          <TertiaryButton onClick={() => setNavOpen(!navOpen)}>
            <div
              aria-label="Open navigation"
              className={`${navOpen ? "close" : "open"} nav-icon`}
            />
          </TertiaryButton>

          <ul className={navOpen ? "open" : "closed"}>
            {links.map((l, idx) => (
              <li key={`${l.name}-link-${idx}`}>
                <Link
                  href={l.path}
                  className={pathname === l.path ? "active" : ""}
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </HeaderStyles>
      <main>{children}</main>;
    </>
  );
};

const HeaderStyles = styled.header`
  margin: 0;
  background: var(--primary-100);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  h1 {
    margin: 0;
    width: min-content;
    background: white;
    font-size: 2rem;
  }

  .nav-icon {
    background: var(--neutral-500);
    height: 4px;
    width: 24px;
    margin: 4px 0;
    transition: all ease 0.2s;

    &:before {
      content: "";
      display: block;
      background: var(--neutral-500);
      height: 4px;
      width: 24px;
      position: relative;
      top: -6px;
      transition: all ease 0.2s;
    }

    &:after {
      content: "";
      display: block;
      background: var(--neutral-500);
      height: 4px;
      width: 24px;
      position: relative;
      top: 2px;
      transition: all ease 0.2s;
    }

    &.close {
      transform: rotate(45deg);

      &:after {
        top: 0px;
        transform: rotate(90deg);
      }
      &:before {
        content: none;
      }
    }
  }

  ul {
    list-style: none;
  }

  li {
    margin: 4px 0;
  }

  ul {
    background: white;
    height: min-content;
    width: min-content;
    position: absolute;
    top: 80px;
    right: 0;
    text-align: center;
    padding: 8px 24px 24px;
    border-left: 1px solid var(--primary-200);
    border-bottom: 1px solid var(--primary-200);
    transition: all ease 0.2s;

    button {
      position: absolute;
      top: 12px;
      right: 12px;
      font-size: 2rem;
      background-color: ${({ theme }) => theme.primary[100]};
      line-height: 1;
    }
  }

  ul.closed {
    right: -100px;
  }

  @media (max-width: 500px) {
    height: 48px;

    h1 {
      font-size: 1.8rem;
    }

    ul.closed {
      display: none;
    }

    ul.open {
      background: white;
      height: 100vh;
      width: 100vw;
      position: fixed;
      top: 17px;
      left: 0;
      font-size: 2rem;
      text-align: center;
      padding: 48px;

      button {
        position: absolute;
        top: 12px;
        right: 12px;
        font-size: 2rem;
        background-color: ${({ theme }) => theme.primary[100]};
        line-height: 1;
      }
    }
  }
`;

export default Layout;
