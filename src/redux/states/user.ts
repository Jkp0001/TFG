/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import { UserProfile } from 'src/services/User/types';
import { clearLocalStorage, persistLocalStorage } from 'src/utilities';

export const EmptyUserState: UserProfile = {
	username: '',
	email: '',
	country: '',
	referralCode: '',
	role: '',
};

export enum LocalStorageKeys {
	UserKey = 'user',
}

export const userSlice = createSlice({
	name: 'user',
	initialState: localStorage.getItem('user')
		? JSON.parse(localStorage.getItem('user') as string)
		: EmptyUserState,
	reducers: {
		createUser: (_state, action) => {
			persistLocalStorage<UserProfile>(
				LocalStorageKeys.UserKey,
				action.payload,
			);
			return action.payload;
		},
		updateUser: (state, action) => {
			const result = { ...state, ...action.payload };
			persistLocalStorage(LocalStorageKeys.UserKey, result);
			return result;
		},
		resetUser: () => {
			clearLocalStorage(LocalStorageKeys.UserKey);
			return EmptyUserState;
		},
	},
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;