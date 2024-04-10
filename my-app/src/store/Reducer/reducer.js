import {CREATE_ITEM, DELETE_ITEM, EDIT_ITEM, SEND_ITEM} from "../../constant/actions";
import {handleLoadState, handleSaveState} from "../../utils/help";

const stateLocalStore = handleLoadState();
const stateRoot = {
    data: [],
    dataDetail: []
}
const initState = stateLocalStore ? stateLocalStore : stateRoot;
function reducer(state, action) {
    switch (action.type) {
        case CREATE_ITEM:
            const newDataCreate = {
                ...state,
                data: [...state.data, action.payload]
            }
            handleSaveState(newDataCreate);
            return newDataCreate;
        case SEND_ITEM: {
            const newDataSend = {
                ...state,
                dataDetail: [action.payload]
            }
            handleSaveState(newDataSend);
            return newDataSend;
        }
        case DELETE_ITEM: {
            const newData = [...state.data];
            newData.splice(action.payload, 1);
            const newDataDelete = {
                ...state,
                data: newData
            }
            handleSaveState(newDataDelete);
            return newDataDelete;
        }
        case EDIT_ITEM: {
            const newData = [...state.data];
            newData.splice(action.payload.id, 1, action.payload);
            const newDataEdit = {
                ...state,
                data: newData
            }
            handleSaveState(newDataEdit)
           return newDataEdit;
        }
        default:
            throw new Error('Invalid action.')
    }
}
export  { initState };
export default reducer;