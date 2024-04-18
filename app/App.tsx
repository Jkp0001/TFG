import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import store from './redux/store';

const theme = extendTheme({
	colors: {
		brand: {
			100: '#f7fafc',
			// ...
			900: '#1a202c',
		},
		sideBar: '#003DA6',
		blueHover: '#1677FF',
		blueButton: '#1677FF',
	},
});


export const App = () => (
	<ChakraProvider theme={theme}>
		<Suspense fallback={<>Cargando...</>}>
			<Provider store={store}>
				<BrowserRouter>
					<RoutesNotFound>
						<Route
							path={'/'}
							element={<Navigate to={PrivateRoutes.Admin} />}
						/>
						<Route path={PublicRoutes.Login} element={<Login />} />
						<Route element={<AuthGuard />}>
							<Route
								path={`${PrivateRoutes.Admin}/*`}
								element={<PrivateStacks />}
							/>
						</Route>
					</RoutesNotFound>
				</BrowserRouter>
			</Provider>
		</Suspense>
	</ChakraProvider>
);