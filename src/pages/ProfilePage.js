import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';

// @mui
import {
  Stack,
  Container,
  Typography,
  Card,
  Avatar,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  InputLabel,
  Input,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

// components
import { useRef, useEffect, useState } from 'react';
import useUser from '../hooks/useUser';

// sections
import { AppNewsUpdate, AppWebsiteVisits, AppWidgetSummary } from '../sections/@dashboard/app';

import { getLocalStorage } from '../utils/utility';

// ----------------------------------------------------------------------

function adddot(number) {
  return number.toLocaleString();
}

export default function ProfilePage() {
  const [showPassword, setShowPassword] = useState(false);
  const [account, error] = useUser(getLocalStorage('accessToken'));
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [height, setHeight] = useState(12345678);
  const blockHeightRef = useRef(12345678);
  useEffect(() => {
    setTimeout(() => {
      setHeight(height + 1);
      blockHeightRef.current += 1;
    }, 300);
  });
  return (
    <>
      <Helmet>
        <title> 账户资料 | 数创链 </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            账户信息
          </Typography>
          <Button>编辑</Button>
        </Stack>
        <Card sx={{ padding: '20px' }}>
          <Stack direction="row">
            <Avatar alt="" sx={{ width: '100px', height: '100px' }} src="/assets/images/avatars/avatar_default.jpg" />
            <Stack ml={3} spacing={2} width={'450px'}>
              <TextField
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
                label="UID"
                value={account?.id}
                defaultValue={0}
              />
              <TextField
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
                label="名称"
                defaultValue="0"
                value={account?.name}
              />
              <TextField
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
                label="邮箱"
                defaultValue="0"
                value={account?.name}
              />
              <TextField
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
                label="公钥"
                defaultValue="0"
                value={account?.pubKey}
              />
              <FormControl variant="standard">
                <InputLabel htmlFor="standard-adornment-password">私钥</InputLabel>
                <Input
                  defaultValue="b"
                  value={account?.priKey}
                  id="standard-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Stack>
          </Stack>
        </Card>
      </Container>
    </>
  );
}
