import { combineReducers } from 'redux';
import ItemsReducer from './ItemsReducer';
import TextReducer from './TextReducer';
import SelectedItemReducer from './SelectedItemReducer';

export default combineReducers({
    items: ItemsReducer,
    input: TextReducer,
    selectedItem: SelectedItemReducer
});
