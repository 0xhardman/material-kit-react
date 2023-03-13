/* eslint-disable no-throw-literal */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import API, { refreshAPIToken } from '../../../common/API';
import { setLocalStorage, getLocalStorage, removeLocalStorage } from '../../../utils/utility';
import Iconify from '../../../components/iconify';
import showMessage from '../../../components/showMessage';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      id: '',
      password: '',
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const login = async ({ id, password }) => {
    try {
      const signinRes = await API.post(`/auth/login`, { id, password });
      if (!signinRes.data.data.verified) {
        throw { message: '账号不存在或密码错误' };
      }
      const accessToken = signinRes.data?.data?.access_token;
      setLocalStorage('accessToken', accessToken);
      refreshAPIToken();
      navigate('/dashboard', { replace: true });
    } catch (err) {
      showMessage({
        type: 'error',
        title: '登陆失败',
        body: err.message,
      });
    }
  };
  const handleClick = (e) => {
    console.log(e);
    login({ id: parseInt(e.id, 10), password: e.password });
  };

  return (
    <>
      <Stack spacing={3} sx={{ my: 3 }}>
        <TextField name="email" label="账号" {...register('id')} />

        <TextField
          name="password"
          label="密码"
          type={showPassword ? 'text' : 'password'}
          {...register('password')}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleSubmit(handleClick)}>
        登录
      </LoadingButton>
    </>
  );
}
