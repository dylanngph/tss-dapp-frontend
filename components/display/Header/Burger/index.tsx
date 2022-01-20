import * as React from 'react';
import { StyledBurger } from './Burger.styled';

interface BurgerProps {
  open: boolean,
  setOpen: (open: boolean) => void,
  theme: string,
  scrollPosition: boolean,
}

const Burger: React.FC<BurgerProps> = ({ setOpen, open, theme, scrollPosition }) => {
  return (
    <StyledBurger theme={theme} open={open} onClick={() => setOpen(!open)} scrollPosition={scrollPosition}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger