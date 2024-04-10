import {CREATE_ITEM, DELETE_ITEM, EDIT_ITEM, SEND_ITEM} from "../../constant/actions";

export const createItem = payload => ({
        type: CREATE_ITEM,
        payload
})
export const sendItem = payload => ({
        type: SEND_ITEM,
        payload
})

export const deleteItem = payload => ({
        type: DELETE_ITEM,
        payload
})

export const editItem = payload => ({
        type: EDIT_ITEM,
        payload
})