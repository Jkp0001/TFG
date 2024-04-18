import { Navigate, Outlet } from 'react-router-dom';
import { AppStore } from '../../redux/store';
import { PublicRoutes } from '..';
import { useSelector } from 'react-redux';
import React from 'react';

export const AuthGuard = () => {
	const userState = useSelector((store: AppStore) => store.user);
	return userState.username ? (
		<Outlet />
	) : (
		<Navigate replace to={PublicRoutes.Login} />
	);
};

export default AuthGuard;