import Image from 'next/image';
import { useRouter } from 'next/router';

import {
  Banner,
  SearchWrapper,
  Wrapper,
  StyledInputBase,
} from './BannerStyles';

import { Button, Typography } from '@mui/material';
import bannerImage from '../../assets/mainBanner.png';

const Banners = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <SearchWrapper>
        <Typography
          variant='h6'
          noWrap
          component='div'
          sx={{ cursor: 'pointer' }}
          onClick={() => router.push('/')}
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
