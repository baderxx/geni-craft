'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

const StyledButton = styled(Button)({
	textTransform: 'none',
	'&:hover': {
		backgroundColor: '#0069d9',
		borderColor: '#0062cc',
		boxShadow: 'none',
	},
	'&:active': {
		boxShadow: 'none',
		backgroundColor: '#0062cc',
		borderColor: '#005cbf',
	},
	'&:focus': {
		boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
	},
});

export default function BaseButton({ children, ...rest }: ButtonProps) {
	return (
		<StyledButton {...rest}>
			{children}
		</StyledButton>
	);
}