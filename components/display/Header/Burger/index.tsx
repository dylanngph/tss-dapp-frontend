import * as React from 'react';
import { StyledBurger } from './Burger.styled';

interface BurgerProps {
  open: boolean,
  setOpen: (open: boolean) => void,
  theme: string,
}

const Burger: React.FC<BurgerProps> = ({ setOpen, open, theme }) => {
  return (
    <StyledBurger theme={theme} open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger