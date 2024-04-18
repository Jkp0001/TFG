import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer from './states/user';
import { UserProfile } from 'src/services/User/types';

export interface AppStore {
	user: UserProfile;
}

export default configureStore<AppStore>({
	reducer: {
		user: userSliceReducer,
	},
});