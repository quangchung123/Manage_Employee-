
export const handleSaveState = (state) => {
    //handle save data to localStorage
    try {
        const convertState = JSON.stringify(state);
        localStorage.setItem('listsData', convertState);
    } catch (err) {
        console.log(err)
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
        console.log(err)
    }
}

export const  handleDataOnPage = (currentPage, dataTable, recordsPerPage) => {
    //handle show list data on each Page
    const firstIndex = (currentPage - 1) * recordsPerPage;
    const lastIndex = firstIndex + recordsPerPage;
    return dataTable.slice(firstIndex, lastIndex);
}
