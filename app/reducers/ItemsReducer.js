const ItemsReducer = (state = {array: [], length: 0}, action) => {
    
    switch(action.type)
    {
        case "Add_Item": {
            console.log("Action: ", action, state);
            let items = state.array;
            let length = state.length;
            length++;
            items.push(action.payload);
            return {array: items, length: length};
        }

        case "Remove_Item": {
            console.log("Action: ", action, state);
            let items = state.array;
            items.splice(action.payload, 1);
            let length = state.length;
            length--;
            return {array: items, length: length};
        }

        default: return state;
    }
}

export default ItemsReducer;