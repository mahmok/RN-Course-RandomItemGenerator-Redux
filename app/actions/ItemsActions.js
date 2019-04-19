export const addItem = (itemText) => {
    return {
        type: "Add_Item",
        payload: itemText
    }
}

export const writeItem = (itemText) => {
    
    return {
        type: "Write_Item",
        payload: itemText
    }
}

export const removeItem = (index) => {
    return {
        type: "Remove_Item",
        payload: index
    }
}

export const selectItem = (length) => {
    return {
        type: "Select_Item",
        payload: length
    }
}