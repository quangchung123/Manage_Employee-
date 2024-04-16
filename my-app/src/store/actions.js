import {CACHE_DATA, CREATE_ITEM, DELETE_ITEM, EDIT_ITEM, GET_ITEM_DETAIL, SEND_ITEM} from "../constant/actions";

export const createItem = payload => ({
        type: CREATE_ITEM,
        payload
})
export const getItem = payload => ({
        type: GET_ITEM_DETAIL,
        payload
})

export const deleteItem = index => ({
        type: DELETE_ITEM,
        payload: {
                idDelete: index
        }
})

export const editItem = payload => ({
        type: EDIT_ITEM,
        payload
})
export const cacheItem = payload => ({
        type: CACHE_DATA,
        payload
})