import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

export interface ButtonLinkProps {
  title: string,
  href: any,
}

export default function ButtonLink ({title, href}: ButtonLinkProps) {
  return (
    <BoxLink>
      <Link href={href} passHref>
        {title}
      </Link>
    </BoxLink>
  );
}

const BoxLink = styled.div`
  a {
    padding: 12px 24px;
    line-height: 19px;
    font-weight: 600;
    background-color: #0047b0;
    border: 1px solid transparent;
    border-radius: 8px;
    color: #ffffff;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    display: inline-block;
    &:hover {
      background-color: #ffffff;
      color: #0047b0;
      border-color: #0047b0;
    }
  }
`;
