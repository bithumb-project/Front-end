import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import { Wrapper, StyledPaper, StyledTableHead, StyledTableRow, CurrencyUnit, Diff, KoreaPremium } from './CoinInfoStyles';
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
    koreaPremium: string,
    volume:string,
  ) {
    return { exchangeName, priceKrw, priceUsd, diff, koreaPremium, volume };
  }
  
  const rows = [
    createData('빗썸', '61,985,000', '52,118.85', '▲ 1,904,000', '+779,255', '3,717'),
    createData('업비트', '61,966,000', '52,080.17', '▲ 273,000', '+774,843', '10,008'),
    createData('코인원', '61,983,000', '52,133.15', '▲ 1,975,000', '+830,843', '1,285'),
    createData('코빗', '62,001,000', '52,132.31', '▲ 2,031,000', '+799,843', '232'),
    createData('플라이어', '61,075,629', '51,381.42', '▲ 2,608,758', '-', '2,839'),
    createData('바이낸스', '61,180,959', '51,429.99', '▲ 2,516,049', '-', '51,606'),
    createData('파이넥스', '61,206,184', '51,438.00', '▲ 2,426,174', '-', '6,330'),
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
                <Diff>{row.diff}</Diff>
                <KoreaPremium>{row.koreaPremium}</KoreaPremium>
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