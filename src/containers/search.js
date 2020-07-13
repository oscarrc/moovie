import { connect } from 'react-redux';
import { SearchForm } from '../components/searchForm';
import { SearchResults } from '../components/searchResults';

const API_KEY = process.env.REACT_APP_OMDB;

const fetchSearch = (searchQuery, page) => (
    fetch(`//www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}&type=movie&page=${page}`)
            .then( res => ( res.json() ) )
)

const MapStateToProps = state => {
    return {
        searchQuery: state.searchQuery,
        usedSearch: state.usedSearch,
        results: state.results,
        loading: state.loading,
        more: state.more,
        page: state.page
    }
}

const MapDispatchToProps = dispatch => {
    return {
        setQuery: (query) => {
            let searchQuery = query.target.value;

            if( searchQuery === "" ){
                dispatch({
                    type: "CLEAR_SEARCH"
                })
            }else{
                dispatch({
                    type: "SET_QUERY",
                    searchQuery
                })
            }
        },
        doSearch: (query, page) => {
            dispatch({
                type: "IS_LOADING"
            })

            fetchSearch(query, page).then( results => dispatch({
                type: "DO_SEARCH",
                results: results.Search || []
            }))
        },
        nextPage: (query, page) => {
            page++

            dispatch({
                type: "IS_LOADING"
            })

            fetchSearch(query, page).then( results => {
                if(results.Response === "True"){
                    dispatch({
                        type: "NEXT_PAGE",
                        results: results.Search,
                        page: page
                    })
                }else{
                    dispatch({
                        type: "NO_MORE"
                    })
                }
            })
        },
    }
}

const createConnection = connect(
    MapStateToProps,
    MapDispatchToProps
)

const Search = createConnection(SearchForm);
const Results = createConnection(SearchResults);

export {
    Search,
    Results
}