function reducer(state, action){
    switch(action.type){
        case "red":
            state.backgroundColor = 'red';
            state.userName = 'Mehmet';
            return { ...state };
        
        case "black":
            state.backgroundColor = "black";
            return { ...state}
        
        case 'kare2':
            state.number = state.number ** 2;
            return { ...state}


            default:
                return state;
    }
}

export default reducer;