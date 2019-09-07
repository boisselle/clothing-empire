// Make sure to always align action creator's type with the
// reducer's type expectation in order to create an appropriate
// effects in our reducer

export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
});