const appReducer = (state = { name: 'Boiler Plate' }, action) => {
    switch (action.type) {
        default:
            return { ...state };
    }
}

export default appReducer;