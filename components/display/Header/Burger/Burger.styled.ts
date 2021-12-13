import styled from 'styled-components';

interface BurgerProps {
  open: boolean,
  theme: string,
}

export const StyledBurger = styled.button<BurgerProps>`
  width: 1.8rem;
  height: 2rem;
  position: relative;
  top: 0;
  right: 25px;
  z-index: 20;
  display: none;
  border: none;
  cursor: pointer;
  background: transparent;
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 1.8rem;
    height: 0.1rem;
    background-color: ${({ open, theme }) => (open || theme == 'black') ? '#030303' : '#ffffff'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    position: relative;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;