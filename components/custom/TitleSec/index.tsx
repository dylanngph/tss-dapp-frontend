import styled from 'styled-components';

export interface TitleSecProps {
  title: string,
}

export default function TitleSec ({title}: TitleSecProps) {
  return (
    <Title>{title}</Title>
  );
}

const Title = styled.h3`
  font-size: 24px;
  line-height: 29px;
  color: #11142D;
  margin: 0 0 15px;
`;