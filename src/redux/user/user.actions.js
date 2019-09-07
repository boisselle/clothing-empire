// Make sure to always align action creator's type with the
// reducer's type expectation in order to create an appropriate
// effects in our reducer
import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
});