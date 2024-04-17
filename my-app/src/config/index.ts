import deleteIcon from "../assets/icon/table/delete.svg";
import editIcon from "../assets/icon/table/create_24px.svg";
import detailIcon from "../assets/icon/table/visibility_24px.svg";
import {BUTTON_ACTION_TYPE} from "../constant";

export const initCrumbs = [
    {
        name: "Home",
        url: '/'
    },
    {
        name: 'Cities',
        url: '/create'
    },
]
export const initCrumbCreate = [
    {
        name: "Home",
        url: '/'
    },
    {
        name: 'Cities',
        url: '/create'
    },
    {
        name: 'Create',
        url: '/create'
    }
]
export const initCrumbUpdate = [
    {
        name: "Home",
        url: '/'
    },
    {
        name: 'Cities',
        url: '/create'
    },
    {
        name: 'Update',
        url: '/edit'
    }
]
export const initNavigate = {
    home: "/",
    create: "/create",
    edit: "/edit",
    detail: "/detail"
}
export const buttonActionOptions = [
    {
        type: BUTTON_ACTION_TYPE.DETAIL_BUTTON,
        src: detailIcon,
        alt: "DetailIcon",
    },
    {
        type: BUTTON_ACTION_TYPE.EDIT_BUTTON,
        src: editIcon,
        alt: "EditIcon",
    },
    {
        type: BUTTON_ACTION_TYPE.DELETE_BUTTON,
        src: deleteIcon,
        alt: "DeleteIcon",
    }
]
