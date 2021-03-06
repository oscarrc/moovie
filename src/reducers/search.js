const INITIAL_STATE = {
    searchQuery: "",
    page: 1,
    usedSearch: false,
    loading: false,
    more: true,
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
                loading: false,
                results: action.results,
                usedSearch: true
            }
        case 'NEXT_PAGE':
            return {
                ...state,
                page: action.page,
                loading: false,
                results: state.results.concat(action.results)
            }
        case 'IS_LOADING':
                return {
                    ...state,
                    loading: true
                }
        case 'NO_MORE':
            return {
                ...state,
                loading: false,
                more: false
            }
        case 'CLEAR_SEARCH':
            return INITIAL_STATE
        default:
            return state;
    }
}