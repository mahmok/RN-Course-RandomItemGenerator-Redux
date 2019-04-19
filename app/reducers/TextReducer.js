const TextReducer = (state = "", action) => {
    switch(action.type)
    {
        case "Write_Item": {
            return action.payload;
        }

        default: return state;
    }
}

export default TextReducer;