import { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { PrivateRoutes } from '.';
import RoutesNotFound from './RoutesNotFound';
import { Layout } from '../sections';
import React from 'react';

const Users = lazy(() => import('../sections/Users/pages/Users'));
const Stats = lazy(() => import('../sections/Stats/Stats'));
const Payments = lazy(() => import('../sections/Payments/pages/Payments'));
const PaymentDetails = lazy(
	() => import('../sections/Payments/pages/PaymentDetails'),
);
const Locations = lazy(() => import('../sections/Locations/pages/Locations'));
const LocationDetails = lazy(
	() => import('../sections/Locations/pages/LocationsDetails'),
);



const PrivateStacks = () => {
	return (
		<RoutesNotFound>
			<Route path='/' element={<Navigate to={PrivateRoutes.Users} />} />
			<Route
				path={PrivateRoutes.Users}
				element={
					<Layout>
						<Users />
					</Layout>
				}
			/>
			<Route
				path={PrivateRoutes.UserDetails}
				element={
					<Layout>
						<UserDetails />
					</Layout>
				}
			/>
			<Route
				path={PrivateRoutes.Tokens}
				element={
					<Layout>
						<Tokens />
					</Layout>
				}
			/>
			<Route
				path={PrivateRoutes.Statistics}
				element={
					<Layout>
						<Stats />
					</Layout>
				}
			/>
			<Route
				path={PrivateRoutes.Payments}
				element={
					<Layout>
						<Payments />
					</Layout>
				}
			/>
			<Route
				path={PrivateRoutes.PaymentDetails}
				element={
					<Layout>
						<PaymentDetails />
					</Layout>
				}
			/>
			<Route
				path={PrivateRoutes.ERoaming}
				element={
					<Layout>
						<ERoaming />
					</Layout>
				}
			/>
			<Route
				path={PrivateRoutes.Locations}
				element={
					<Layout>
						<Locations />
					</Layout>
				}
			/>
			<Route
				path={PrivateRoutes.LocationDetails}
				element={
					<Layout>
						<LocationDetails />
					</Layout>
				}
			/>
			<Route
				path={PrivateRoutes.Sessions}
				element={
					<Layout>
						<Sessions />
					</Layout>
				}
			/>
			<Route
				path={PrivateRoutes.SessionDetails}
				element={
					<Layout>
						<SessionDetails />
					</Layout>
				}
			/>
		</RoutesNotFound>
	);
};

export default PrivateStacks;