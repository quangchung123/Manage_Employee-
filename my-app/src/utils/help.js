import {ID_INIT} from "../constant";

export const handleSaveListDataToStorage = (state) => {
    //handle save data to localStorage
    try {
        const convertState = JSON.stringify(state);
        localStorage.setItem('listsData', convertState);
    } catch (err) {
        console.log(err);
    }
}

export const handleSaveDataToStorage = (key, value) => {
    //handle save data to localStorage
    try {
        const convertState = JSON.stringify(value);
        localStorage.setItem(key, convertState);
    } catch (err) {
        console.log('error', err);
    }
}

export const handleLoadState = () => {
    //handle get data from localStorage
    try {
        const dataStore = localStorage.getItem('listsData');
        if(dataStore === null) {
            return undefined;
        }
        return JSON.parse(dataStore);
    } catch (err) {
        console.log('error', err)
    }
}

export const handleLoadDataFromStorage = (key) => {
    //handle get data from localStorage
    try {
        const dataStore = localStorage.getItem(key);
        if(dataStore === null) {
            return undefined;
        }
        return JSON.parse(dataStore);
    } catch (err) {
        console.log('error', err)
    }
}

export const  handleDataOnPage = (currentPage, dataTable, recordsPerPage) => {
    //handle show list data on each Page
    const firstIndex = (currentPage - 1) * recordsPerPage;
    const lastIndex = firstIndex + recordsPerPage;
    return dataTable.slice(firstIndex, lastIndex);
}

export const createSequentialID = (key) => {
    // handle create ID for item city
    let currentID = parseInt(localStorage.getItem(key)) || ID_INIT;
    currentID++;
    localStorage.setItem(key, currentID.toString());
    return currentID;
}
