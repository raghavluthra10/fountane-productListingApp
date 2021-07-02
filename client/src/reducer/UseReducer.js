export const initialState = null;

export const reducer = (state, action) => {
    if(action.type === 'USERNAMES') {
        return action.payload;
    }

    return state;
}
