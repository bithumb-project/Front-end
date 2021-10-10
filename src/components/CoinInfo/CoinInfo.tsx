import React, { useState } from 'react';
import { Table, TableCell, TableRow, TableBody } from '@mui/material';
import { Wrapper, StyledPaper, StyledTableHead, StyledTableRow, CurrencyUnit, Diff, DiffPercent, KoreaPremium, KoreaPremiumPercent } from './CoinInfoStyles';
import CoinTab from './CoinTab';


const CoinInfo: React.FC = (props) => {
  const [toggleTable, setToggleTable] = useState<boolean>(false);
  const [currencyUnit, setCurrencyUnit] = useState<string>('BTC');

  const handleToggleClick = () => {
    setToggleTable(!toggleTable);
  };

  const handleUnitClick = (unit: string) => {
    setCurrencyUnit(unit);
  };
  
  function createData(
    exchangeName: string,
    priceKrw: string,
    priceUsd: string,
    diff: string,
    diffPercent: string,
    koreaPremium: string,
    koreaPremiumPercent: string,
    volume:string,
  ) {
    return { exchangeName, priceKrw, priceUsd, diff, diffPercent, koreaPremiumPercent, koreaPremium, volume };
  }
  
  const rows = [
    createData('빗썸', '61,985,000', '52,118.85', '▲ 1,904,000', '+0.60%', '+779,255', '+2.18%', '3,717'),
    createData('업비트', '61,966,000', '52,080.17', '▲ 273,000', '+0.54%', '+774,843', '+2.20%', '10,008'),
    createData('코인원', '61,983,000', '52,133.15', '▲ 1,975,000', '+0.64%', '+830,843', '+2.14%', '1,285'),
    createData('코빗', '62,001,000', '52,132.31', '▲ 2,031,000', '+0.66%', '+799,843', '+2.19%', '232'),
    createData('플라이어', '61,075,629', '51,381.42', '▲ 2,608,758', '+0.68%', '-', '', '2,839'),
    createData('바이낸스', '61,180,959', '51,429.99', '▲ 2,516,049', '+0.80%', '-', '', '51,606'),
    createData('파이넥스', '61,206,184', '51,438.00', '▲ 2,426,174', '+0.71%', '-', '', '6,330'),
  ];
  
  return (
    <Wrapper>
      <CoinTab toggle={toggleTable} toggleEvent={handleToggleClick} clickEvent={handleUnitClick} />
      <StyledPaper className={toggleTable ? 'closed' : ''}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <StyledTableHead>
            <TableRow>
              <TableCell align="center">거래소</TableCell>
              <TableCell align="right">실시간 시세(KRW)&nbsp;</TableCell>
              <TableCell align="right">실시간 시세(USD)&nbsp;</TableCell>
              <TableCell align="right">24시간 변동률&nbsp;</TableCell>
              <TableCell align="right">한국 프리미엄&nbsp;</TableCell>
              <TableCell align="right">거래량&nbsp;</TableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.exchangeName}>
                <TableCell component="th" scope="row" align="center">{row.exchangeName}</TableCell>
                <TableCell align="right">{row.priceKrw}<CurrencyUnit>KRW</CurrencyUnit></TableCell>
                <TableCell align="right">{row.priceUsd}<CurrencyUnit>USD</CurrencyUnit></TableCell>
                <Diff>{row.diff}<DiffPercent>{row.diffPercent}</DiffPercent></Diff>
                <KoreaPremium>{row.koreaPremium}<KoreaPremiumPercent>{row.koreaPremiumPercent}</KoreaPremiumPercent></KoreaPremium>
                <TableCell align="right">{row.volume}<CurrencyUnit>{currencyUnit}</CurrencyUnit></TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </StyledPaper>
    </Wrapper>
  );
}

export default CoinInfo;