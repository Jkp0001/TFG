import { Box, Stack } from '@chakra-ui/react';
import { Navigation, PageHeader } from '../../components';
import React from 'react';

interface Props {
	children: React.JSX.Element[] | React.JSX.Element;
}
const Layout = ({ children }: Props) => {
	return (
		<Stack direction={'row'} h='100%' gap={'24px'}>
			<Navigation />
			<Stack direction={'column'} width={'100%'} ml={'256px'} mr={'24px'}>
				<Box w='100%' py={4}>
					{children}
				</Box>
			</Stack>
		</Stack>
	);
};
export default Layout;