import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { CoinTabContainer, ArrowButton, CoinCollapse, ArrowButtonIcon, CoinBox } from './CoinTabStyles';

interface Props {
  toggle: boolean;
  toggleEvent: () => void;
}

const CoinTab: React.FC<Props> = ({toggle, toggleEvent}) => {
  const [value, setValue] = React.useState(0);
  const coins = ['BTC', 'ETH', 'LTC', 'ETC', 'XRP', 'XLM', 'BCH', 'EOS', 'ADA', 'DOGE'];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <CoinTabContainer>
      <CoinBox sx={{ width: '100%' }}>
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
      </CoinBox>
      <CoinCollapse>
        <ArrowButton onClick={toggleEvent}>
          <ArrowButtonIcon className={toggle ? 'view' : ''}/>
        </ArrowButton>
      </CoinCollapse>
    </CoinTabContainer>
  );
}

export default CoinTab;