import { SyntheticEvent, useState } from 'react';
import { Wrapper, TabStyle, TabsStyle, TabBox } from './TabMenuStyles';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Link from 'next/link';
import useAuth from '../../features/auth/authHooks';

const TabMenu = () => {
  const [value, setValue] = useState(0);
  const { isLoggedIn, logout } = useAuth();

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const Native = () => {
    return (
      <FormControl fullWidth margin='dense'>
        <NativeSelect
          defaultValue={0}
          style={{ color: 'rgba(0,0,0,0.6)', fontSize: 10, fontWeight: 500 }}
        >
          <option value={0}>한국어</option>
          <option value={1}>English</option>
          <option value={2}>日本語</option>
          <option value={3}>中文(中国)</option>
          <option value={4}>中文(臺灣)</option>
        </NativeSelect>
      </FormControl>
    )
  };

  return (
    <Wrapper>
      <TabsStyle value={value} onChange={handleChange}>
        <TabStyle icon={<HomeIcon />} label='홈으로' />
        <TabStyle icon={<FavoriteIcon />} label='즐겨찾기 추가' />
        <TabStyle icon={<AddCircleIcon />} label='시작페이지 설정' />
        <TabStyle icon={<DarkModeIcon />} label='야간모드' />
      </TabsStyle>
      { isLoggedIn ? (
        <TabsStyle value={value} onChange={handleChange}>
          <TabStyle icon={<LogoutIcon />} label='로그아웃' onClick={logout} />
          <Native />
        </TabsStyle>
      ) : (
        <TabsStyle value={value} onChange={handleChange}>
          <Link href='/login'>
            <TabStyle icon={<LoginIcon />} label='로그인' />
          </Link>
          <Link href='/signup'>
            <TabStyle icon={<PermIdentityIcon />} label='회원가입' />
          </Link>
          <Native />
        </TabsStyle>
      )}
    </Wrapper>
  );
};

export default TabMenu;
