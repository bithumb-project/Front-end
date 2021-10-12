import Image from 'next/image';
import { useRouter } from 'next/router';

import {
  Banner,
  SearchWrapper,
  LogoWrapper,
  Logo,
  Wrapper,
  StyledInputBase,
} from './BannerStyles';

import { Button } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import bannerImage from '../../assets/mainBanner.png';

const Banners = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <SearchWrapper>
        <LogoWrapper>
          <Logo variant='h6' noWrap onClick={() => router.push('/')}>
            <MonetizationOnIcon style={{ marginRight: '5px' }} />
            <div>BITHUMBUP</div>
          </Logo>
        </LogoWrapper>
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
