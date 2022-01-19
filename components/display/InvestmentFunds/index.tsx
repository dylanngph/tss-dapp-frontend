import * as React from 'react';
import Container from '@mui/material/Container';
import TableInvestmentFunds from 'components/custom/TableInvestmentFunds';

function createData(id: string, name: string, type: string, foundedYear: string, projects: {image: string, 
  name: string,
  date: string}[]) {
  return { id, name, type, foundedYear, projects };
}

const investmentFundsInit = [
  createData('1', 'Dreamboat Capital', 'Đầu tư blockchain', '16/01/2022', [{image: '/assets/images/IOTA1-small.png', name: 'Project Name', date: '2/3/2833'}, {image: '/assets/images/IOTA1-small.png', name: 'Project Name', date: '2/3/2833'}]),
  createData('2', 'Cupcake', 'Đầu tư blockchain', '16/01/2022', [{image: '/assets/images/IOTA1-small.png', name: 'The Nothing of the Streams', date: '2/3/2833'}, {image: '/assets/images/IOTA1-small.png', name: 'Project Name', date: '2/3/2833'}, {image: '/assets/images/IOTA1-small.png', name: 'Project Name', date: '2/3/2833'}]),
  createData('3', 'The Names is Dragon', 'Đầu tư blockchain', '16/01/2022', [{image: '/assets/images/IOTA1-small.png', name: 'Misty Mist', date: '2/3/2833'}, {image: '/assets/images/IOTA1-small.png', name: 'Servants in the Storms', date: '2/3/2833'}, {image: '/assets/images/IOTA1-small.png', name: 'Tales of Flowers', date: '2/3/2833'}]),
];

export default function InvestmentFundsPage () {
  return (
    <Container sx={{ paddingTop: '24px' }}>
      <h3 className="title-sec">Quỹ đầu tư</h3>
      <TableInvestmentFunds investmentFunds={investmentFundsInit}/>
    </Container>
  );
}