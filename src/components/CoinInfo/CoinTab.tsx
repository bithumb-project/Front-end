import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { CoinTabContainer, ArrowButton, CoinCollapse } from './CoinTabStyles';

const CoinTab: React.FC = (props) => {
  const [value, setValue] = React.useState(0);
  const coins = ['BTC', 'ETH', 'LTC', 'ETC', 'XRP', 'XLM', 'BCH', 'EOS', 'ADA', 'DOGE'];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <CoinTabContainer>
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          {coins.map((coin, i) => (
            <Tab key={i} value={i} label={coin}></Tab>
          ))}
          {/* <Tab value="one" label="BTC" wrapped />
          <Tab value="two" label="Item Two" />
          <Tab value="three" label="Item Three" /> */}
        </Tabs>
      </Box>
      <CoinCollapse>
        <ArrowButton>
          <ArrowDropDownIcon />
        </ArrowButton>
      </CoinCollapse>
    </CoinTabContainer>
  );
}

export default CoinTab;