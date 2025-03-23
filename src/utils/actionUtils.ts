const isPendingAction = (action: any) => {
    return action.type.endsWith("/pending");
}

const isRejectAction = (action: any) => {
    return action.type.endsWith("/rejected")
}

const handlePending = (state: { isLoading: boolean; }) => {
  state.isLoading = true;
};

const handleRejected = (state: { isLoading: boolean; error: string | null; }, action: any) => {
  state.isLoading = false;
  state.error = action.payload;
};

export { isPendingAction, isRejectAction, handlePending, handleRejected };