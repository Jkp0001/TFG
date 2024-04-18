import { Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

interface Props {
	children: React.JSX.Element[] | React.JSX.Element;
}

const RoutesNotFound = ({ children }: Props) => {
	return (
		<Routes>
			{children}
			<Route
				path='*'
				element={
					<Stack
						direction={'row'}
						h='100%'
						w={'100%'}
						display={'flex'}
						alignItems={'center'}
						justifyContent={'center'}
					>
						<Text fontSize={'4xl'}>Page not found</Text>
					</Stack>
				}
			/>
		</Routes>
	);
};

export default RoutesNotFound;