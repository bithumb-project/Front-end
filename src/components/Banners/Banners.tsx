import Image from 'next/image';
import { Button, Typography } from '@mui/material';

import {
  Banner,
  SearchWrapper,
  Wrapper,
  StyledInputBase,
  SearchIconWrapper,
} from './BannerStyles';

import bannerImage from '../../assets/mainBanner.png';
import SearchIcon from '@mui/icons-material/Search';

const Banners = () => {
  return (
    <Wrapper>
      <SearchWrapper>
        <Typography
          variant='h6'
          noWrap
          component='div'
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          BITHUMBUP
        </Typography>
        <StyledInputBase
          placeholder='검색어를 입력 해 주세요.'
          inputProps={{ 'aria-label': 'search' }}
        />
        <Button variant='outlined'>검색</Button>
      </SearchWrapper>
      <Banner>
        <Image src={bannerImage} alt='banner image' />
      </Banner>
    </Wrapper>
  );
};

export default Banners;
