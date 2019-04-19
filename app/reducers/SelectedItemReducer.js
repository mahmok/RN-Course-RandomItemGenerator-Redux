const SelectedItemReducer = (state = -1, action) => {
    switch(action.type)
    {
        case "Select_Item": {
            let length = action.payload;
            let index = Math.floor(Math.random()*length)
            return index;
        }

        default: return state;
    }
}

export default SelectedItemReducer;