import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

export default function Login() {
  return (
    <>
      <CssBaseline enableColorScheme />
      <Container maxWidth="lg">
        <Box component="form"  sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </FormControl>
        </Box>
      </Container>
    </>
  );
}