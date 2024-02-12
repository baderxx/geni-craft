'use client'
import * as React from 'react';
import Box, {BoxProps} from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export default function BaseFullWidthHeightBox({ children, sx, ...rest }: BoxProps) {
    const FullHeighWidthBox = styled(Box)({
        display: 'flex',
        flexWrap: 'no-wrap', 
        height: '100vh', 
        width: '100%', 
        alignItems: 'center',
        ...(sx && sx)
      })

    return (
      <FullHeighWidthBox {...rest}>
        {children}
      </FullHeighWidthBox>
    )
}