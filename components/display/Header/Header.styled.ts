import styled from 'styled-components';
import { device } from 'styles/media-device';

interface HeaderProps {
  theme: string,
  scrollPosition: boolean,
}

export const WrapperNav = styled.nav<HeaderProps>`
  padding: 24px 0;
  color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: background 0.3s;
  background-color: ${({ theme, scrollPosition }) => (theme === 'white' && !scrollPosition) ? 'transparent' : '#ffffff'};
  ${({ scrollPosition }) => scrollPosition && ('box-shadow: 0px 4px 17px rgb(0 0 0 / 5%);')}
  ul {
    display: none;
    li {
      margin-left: 30px;
      cursor: pointer;
      font-family: 'Inter-Bold';
      color: ${({ theme, scrollPosition }) => (theme === 'white' && !scrollPosition) ? '#ffffff' : 'var(--color-primary)'};
    }
  }
  @media screen and ${device.tablet} {
    ul {
      padding-left: 30px;
      list-style: none;
      position: relative;
      background-color: transparent;
      display: block;
      li {
        display: inline-block;
      }
    }
  }
`;