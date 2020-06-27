
const setActiveItem = (activeItem: string) => {    
    return async dispatch => {
        return dispatch({ type: 'SET_ACTIVE_ITEM', payload: activeItem });
    };
};

export {
    setActiveItem
};
