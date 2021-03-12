const inintialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}
export default function(state = inintialState, action) {
    switch(action.type){
        default:
        return state;
    }
}