const INITIAL_STATE = {
    searchQuery: "",
    page: 1,
    usedSearch: false,
    results: []
}

export const search = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_QUERY':
            return {
                ...state,
                searchQuery: action.searchQuery
            }
        case 'DO_SEARCH':
            return {
                ...state,
                results: action.results,
                usedSearch: true
            }
        case 'NEXT_PAGE':
            return {
                ...state,
                page: action.page,
                results: state.results.concat(action.results)
            }
        case 'CLEAR_SEARCH':
            return INITIAL_STATE
        default:
            return state;
    }
}