import {
	Box,
	Center,
	Heading,
	Image,
	Stack,
	Spinner,
	Text,
} from '@chakra-ui/react';


import { useState } from 'react';
import React from 'react';

const Stats = () => {
	const [isLoading, setIsLoading] = useState(true);

	setInterval(() => {
		setIsLoading(false);
	}, 2000);

	return isLoading ? (
		<Box p={8}>
			<Center>
				<Spinner size='xl' />
			</Center>
			<Text textAlign={'center'} p={4}>
				Cargando estadísticas...
			</Text>
		</Box>
	) : (
		<Box py={2}>
			<Box p={4}>
				<Center>
					<Stack direction={'row'} spacing={24} align={'center'}>
						{isLoading ? (
							<Spinner size='xl' />
						) : (
							<Image
								src={ActiveUsers}
								alt='Active Users'
								maxW={'25vw'}
							/>
						)}
						{isLoading ? (
							<Spinner size='xl' />
						) : (
							<Image
								src={NewUsers}
								alt='New Users'
								maxW={'35vw'}
							/>
						)}
					</Stack>
				</Center>
			</Box>

			<Box p={4}>
				<Center>
					<Stack direction={'row'} spacing={24} align={'center'}>
						{isLoading ? (
							<Spinner size='xl' />
						) : (
							<Image
								src={UsoCargadores}
								alt='Active Users'
								maxW={'25vw'}
							/>
						)}
						{isLoading ? (
							<Spinner size='xl' />
						) : (
							<Image
								src={KwVendidos}
								alt='New Users'
								maxW={'35vw'}
							/>
						)}
					</Stack>
				</Center>
			</Box>

			<Box>
				<Center>
					<Stack direction={'row'} spacing={24} align={'center'}>
						{isLoading ? (
							<Spinner size='xl' />
						) : (
							<Image
								src={ventas}
								alt='Active Users'
								maxW={'35vw'}
							/>
						)}
					</Stack>
				</Center>
			</Box>
		</Box>
	);
};
export default Stats;