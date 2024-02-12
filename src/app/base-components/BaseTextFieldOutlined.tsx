'use client'
import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { OutlinedInputProps } from '@mui/material/OutlinedInput';


const TextFieldOutlined = styled((props: TextFieldProps) => (
    <TextField
    InputProps={{ ...props.InputProps, disableUnderline: true }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiFilledInput-root': {
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
      border: '1px solid',
      borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&.Mui-focused': {
        backgroundColor: 'transparent',
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

  export default function BaseTextFieldOutlined({children, ...rest}: TextFieldProps) {
    return (
        <TextFieldOutlined {...rest}>
            {children}
        </TextFieldOutlined>
    )
  }