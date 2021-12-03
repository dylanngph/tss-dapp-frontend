import * as React from 'react';
import { StyledBurger } from './Burger.styled';

interface BurgerProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const Burger: React.FC<BurgerProps> = ({ setOpen, open }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger