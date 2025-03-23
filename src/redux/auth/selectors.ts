const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
const selectUser = (state: any) => state.auth.user;
const selsectIsRefreshing = (state: any) => state.auth.isRefreshing;

export { selectIsLoggedIn, selectUser, selsectIsRefreshing };