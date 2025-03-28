const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
const selectUser = (state: any) => state.auth.user;
const selsectIsRefreshing = (state: any) => state.auth.isRefreshing;
const selectError = (state: any) => state.auth.error;


export { selectIsLoggedIn, selectUser, selsectIsRefreshing, selectError };