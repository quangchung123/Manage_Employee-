import { LOCAL_STORAGE_KEY } from "../constant";
import {CACHE_DATA, CREATE_ITEM, DELETE_ITEM, EDIT_ITEM, GET_ITEM_DETAIL} from "../constant/actions";
import { handleLoadDataFromStorage } from "../utils/help";
import {listData} from "../config/listData";

const stateRoot = {
    data: [],
    dataDetail: {}
}
const initState = stateRoot
function reducer(state, action) {
    switch (action.type) {
        case CREATE_ITEM: {
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        }
        case GET_ITEM_DETAIL: {
            return {
                ...state,
                dataDetail: action.payload
            }
        }
        case DELETE_ITEM: {
            const newDataAfterDelete = state.data.filter((item) => item.id !== action.payload.idDelete);
            return {
                ...state,
                data: newDataAfterDelete
            };
        }
        case EDIT_ITEM: {
            const newData = state.data.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload
                }
                return {
                    ...item
                }
            })
            return {
                ...state,
                data: newData
            }
        }
        case CACHE_DATA: {
            return {
                ...state,
                data: action.payload
            }
        }
        default:
            console.log('Invalid action')
    }
}
export { initState };
export default reducer;