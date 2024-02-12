import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import BaseFullWidthHeightBox from '@/app/base-components/BaseFullWidthHeightBox';



import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import BaseTextFieldOutlined from '@/app/base-components/BaseTextFieldOutlined';
import BaseButton from '@/app/base-components/BaseButton';

export default function Login() {
  return (
    <>
      <CssBaseline enableColorScheme />
      <Container maxWidth="lg">
        <BaseFullWidthHeightBox component="form" sx={{justifyContent: 'center'}}>
          <FormControl fullWidth sx={{ m: 1, maxWidth: 400 }}>
            <BaseTextFieldOutlined label="Username or Email" placeholder="Please enter your username or email" variant="filled" />
            <BaseTextFieldOutlined sx={{marginTop: 2}} label="Password" placeholder="Please enter your password" variant="filled" />
            <BaseButton variant="contained" size="large" sx={{mt: 2, height: 56}}>
              Login
            </BaseButton>
          </FormControl>
        </BaseFullWidthHeightBox>
      </Container>
    </>
  );
}